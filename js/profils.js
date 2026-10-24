/* Capitaine 200 — pseudos et progression partagée.
   La base partagée est une Firebase Realtime Database, utilisée en simple REST (pas de bibliothèque).
   Son adresse se règle dans js/config.js. Sans adresse, les pseudos restent sur l'appareil. */
(function () {
  'use strict';
  const C = window.C200;
  const P = (C.profils = {});

  // ---------- SHA-256 (petite implémentation, marche aussi hors contexte sécurisé) ----------
  const K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];
  P.sha256 = function (str) {
    const bytes = new TextEncoder().encode(String(str));
    const len = bytes.length, bitLen = len * 8;
    const total = (((len + 9) + 63) >> 6) << 6;
    const m = new Uint8Array(total);
    m.set(bytes); m[len] = 0x80;
    const dv = new DataView(m.buffer);
    dv.setUint32(total - 4, bitLen >>> 0); dv.setUint32(total - 8, Math.floor(bitLen / 0x100000000));
    const H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const W = new Uint32Array(64);
    const rr = (x, n) => (x >>> n) | (x << (32 - n));
    for (let o = 0; o < total; o += 64) {
      for (let i = 0; i < 16; i++) W[i] = dv.getUint32(o + i * 4);
      for (let i = 16; i < 64; i++) {
        const s0 = rr(W[i - 15], 7) ^ rr(W[i - 15], 18) ^ (W[i - 15] >>> 3);
        const s1 = rr(W[i - 2], 17) ^ rr(W[i - 2], 19) ^ (W[i - 2] >>> 10);
        W[i] = (W[i - 16] + s0 + W[i - 7] + s1) >>> 0;
      }
      let [a, b, c, d, e, f, g, h] = H;
      for (let i = 0; i < 64; i++) {
        const S1 = rr(e, 6) ^ rr(e, 11) ^ rr(e, 25);
        const ch = (e & f) ^ (~e & g);
        const t1 = (h + S1 + ch + K[i] + W[i]) >>> 0;
        const S0 = rr(a, 2) ^ rr(a, 13) ^ rr(a, 22);
        const mj = (a & b) ^ (a & c) ^ (b & c);
        const t2 = (S0 + mj) >>> 0;
        h = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = b; b = a; a = (t1 + t2) >>> 0;
      }
      H[0] = (H[0] + a) >>> 0; H[1] = (H[1] + b) >>> 0; H[2] = (H[2] + c) >>> 0; H[3] = (H[3] + d) >>> 0;
      H[4] = (H[4] + e) >>> 0; H[5] = (H[5] + f) >>> 0; H[6] = (H[6] + g) >>> 0; H[7] = (H[7] + h) >>> 0;
    }
    return H.map((x) => x.toString(16).padStart(8, '0')).join('');
  };

  // ---------- pseudo → clé ----------
  P.keyOf = (pseudo) => String(pseudo || '').trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 20);
  P.hash = (key, pass) => P.sha256('c200|' + key + '|' + pass);

  // ---------- base partagée ----------
  P.enabled = () => typeof C.config.db === 'string' && /^(https:\/\/\S+|http:\/\/(localhost|127\.0\.0\.1)(:\d+)?(\/\S*)?)$/.test(C.config.db.trim());
  const base = () => C.config.db.trim().replace(/\/+$/, '') + '/c200/';
  P.api = async function (path, method, body) {
    const opt = { method: method || 'GET', cache: 'no-store' };
    if (body !== undefined) { opt.headers = { 'Content-Type': 'application/json' }; opt.body = JSON.stringify(body); }
    const ctl = typeof AbortController === 'function' ? new AbortController() : null;
    if (ctl) { opt.signal = ctl.signal; setTimeout(() => ctl.abort(), 15000); }
    const r = await fetch(base() + path + '.json', opt);
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  };

  // ---------- compression (moins de données mobiles) ----------
  function b64(buf) {
    const u = new Uint8Array(buf); let s = '';
    for (let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode.apply(null, u.subarray(i, i + 0x8000));
    return btoa(s);
  }
  function unb64(s) { const t = atob(s); const u = new Uint8Array(t.length); for (let i = 0; i < t.length; i++) u[i] = t.charCodeAt(i); return u; }
  P.pack = async function (obj) {
    const json = JSON.stringify(obj);
    if (typeof CompressionStream === 'function') {
      try {
        const st = new Blob([json]).stream().pipeThrough(new CompressionStream('gzip'));
        return { z: b64(await new Response(st).arrayBuffer()) };
      } catch (e) { /* on envoie en clair */ }
    }
    return { v: json };
  };
  P.unpack = async function (o) {
    if (!o) return null;
    if (o.v) return JSON.parse(o.v);
    if (o.z && typeof DecompressionStream === 'function') {
      const st = new Blob([unb64(o.z)]).stream().pipeThrough(new DecompressionStream('gzip'));
      return JSON.parse(await new Response(st).text());
    }
    return null;
  };

  // ---------- fusion de deux progressions (téléphone + PC) ----------
  // Pour chaque carte / question, on garde la plus récente ou la plus avancée.
  P.merge = function (A, B) {
    if (!B) return A;
    if (!A) return B;
    const out = JSON.parse(JSON.stringify(A));
    const pick = (field, better) => {
      const x = (out[field] = out[field] || {}), y = B[field] || {};
      for (const k in y) if (!(k in x) || better(y[k], x[k])) x[k] = y[k];
    };
    const tot = (s) => (s.ok || 0) + (s.ko || 0);
    pick('cards', (y, x) => (y.n || 0) > (x.n || 0));
    pick('qcm', (y, x) => (y.t || 0) > (x.t || 0) || (!(y.t || x.t) && tot(y) > tot(x)));
    pick('fiches', (y, x) => !x && !!y);
    pick('calc', (y, x) => tot(y) > tot(x));
    pick('rm', (y, x) => (y.t || 0) > (x.t || 0) || (!(x.txt) && !!y.txt));
    pick('days', (y, x) => y > x);
    const seen = new Set((out.exams || []).map((e) => e.d));
    out.exams = (out.exams || []).concat((B.exams || []).filter((e) => !seen.has(e.d))).sort((p, q) => p.d - q.d);
    return out;
  };
})();
