
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open('bura-cache-v1').then(cache => cache.addAll([
    '/',
    '/index.html',
    '/manifest.webmanifest',
    '/icon-192.png',
    '/icon-512.png'
  ])));

});
self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
