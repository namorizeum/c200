/* Capitaine 200 — service worker : le site marche hors ligne après la première visite.
   Fichier généré par tools/build_sw.py : la version change dès qu'un fichier change. */
const VERSION = 'c200-2473edfc2b';
const ASSETS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'css/style.css',
  'js/app.js',
  'js/core.js',
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
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon.svg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION && k !== 'c200-fonts').map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // polices Google : cache d'abord, réseau sinon
  if (url.hostname.endsWith('fonts.googleapis.com') || url.hostname.endsWith('fonts.gstatic.com')) {
    e.respondWith(caches.open('c200-fonts').then((c) => c.match(req).then((hit) => hit || fetch(req).then((res) => { if (res.ok || res.type === 'opaque') c.put(req, res.clone()); return res; }))));
    return;
  }
  if (url.origin !== location.origin) return;
  // fichiers du site : réponse immédiate depuis le cache, mise à jour en arrière-plan
  e.respondWith(caches.open(VERSION).then((c) => c.match(req, { ignoreSearch: true }).then((hit) => {
    const net = fetch(req).then((res) => { if (res.ok) c.put(req, res.clone()); return res; }).catch(() => hit || c.match('index.html'));
    return hit || net;
  })));
});
