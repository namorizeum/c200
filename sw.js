/* Capitaine 200 — service worker (généré par tools/build_sw.py).
   En ligne : on prend toujours la dernière version publiée (réseau d'abord).
   Hors ligne : on sert la copie gardée en cache. */
const VERSION = 'c200-6984afa641';
const ASSETS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'css/style.css',
  'js/app.js',
  'js/config.js',
  'js/core.js',
  'js/profils.js',
  'js/gen/anglais.js',
  'js/gen/feux.js',
  'js/gen/machine.js',
  'js/gen/maree.js',
  'js/gen/meteo.js',
  'js/gen/nav.js',
  'js/gen/radar.js',
  'js/gen/secu.js',
  'js/gen/stab.js',
  'data/anglais.js',
  'data/balisage.js',
  'data/cgo.js',
  'data/circuits.js',
  'data/construction.js',
  'data/electricite.js',
  'data/manoeuvre.js',
  'data/marees.js',
  'data/meteo.js',
  'data/moteur.js',
  'data/nav.js',
  'data/navelec.js',
  'data/quart.js',
  'data/radar.js',
  'data/rapport.js',
  'data/rdb.js',
  'data/reglementation.js',
  'data/securite.js',
  'data/stabilite.js',
  'data/yacht.js',
  'data/qcm/ang-1.js',
  'data/qcm/ang-2.js',
  'data/qcm/bal-1.js',
  'data/qcm/bal-2.js',
  'data/qcm/cgo-1.js',
  'data/qcm/cgo-2.js',
  'data/qcm/cgo-3.js',
  'data/qcm/cir-1.js',
  'data/qcm/cir-2.js',
  'data/qcm/cst-1.js',
  'data/qcm/cst-2.js',
  'data/qcm/ele-1.js',
  'data/qcm/ele-2.js',
  'data/qcm/man-1.js',
  'data/qcm/man-2.js',
  'data/qcm/mar-1.js',
  'data/qcm/mar-2.js',
  'data/qcm/met-1.js',
  'data/qcm/met-2.js',
  'data/qcm/met-3.js',
  'data/qcm/mot-1.js',
  'data/qcm/mot-2.js',
  'data/qcm/nav-1.js',
  'data/qcm/nav-2.js',
  'data/qcm/nel-1.js',
  'data/qcm/nel-2.js',
  'data/qcm/qrt-1.js',
  'data/qcm/qrt-2.js',
  'data/qcm/rad-1.js',
  'data/qcm/rad-2.js',
  'data/qcm/rdb-1.js',
  'data/qcm/rdb-2.js',
  'data/qcm/rdb-3.js',
  'data/qcm/rdb-4.js',
  'data/qcm/reg-1.js',
  'data/qcm/reg-2.js',
  'data/qcm/rm-1.js',
  'data/qcm/sec-1.js',
  'data/qcm/sec-2.js',
  'data/qcm/stb-1.js',
  'data/qcm/stb-2.js',
  'data/qcm/stb-3.js',
  'data/qcm/yac-1.js',
  'data/qcm/yac-2.js',
  'data/qcm/yac-3.js',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon.svg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ASSETS.map((u) => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION && k !== 'c200-fonts').map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname.endsWith('fonts.googleapis.com') || url.hostname.endsWith('fonts.gstatic.com')) {
    e.respondWith(caches.open('c200-fonts').then((c) => c.match(req).then((hit) => hit || fetch(req).then((res) => { if (res.ok || res.type === 'opaque') c.put(req, res.clone()); return res; }))));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith(caches.open(VERSION).then((c) =>
    fetch(req, { cache: 'no-cache' })
      .then((res) => { if (res.ok) c.put(req, res.clone()); return res; })
      .catch(() => c.match(req, { ignoreSearch: true }).then((hit) => hit || c.match('index.html')))
  ));
});
