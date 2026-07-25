const CACHE_NAME = 'atlas-errante-v5';
const APP_SHELL = [
  './index.html',
  './manifest.json',
  './world-countries.json',
  './icon-192.png',
  './icon-512.png',
  './icon-192-maskable.png',
  './icon-512-maskable.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Cada archivo se guarda por separado: si alguno falla (ej. no se
      // subió bien), no bloquea el resto ni impide que la PWA se instale.
      return Promise.all(
        APP_SHELL.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('No se pudo cachear en la instalación:', url, err);
          })
        )
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

// Solo controlamos los archivos propios de la app (mismo origen y método GET).
// Todo lo externo (Google Maps, tiles de mapas, fuentes, Leaflet) se deja
// pasar directo a la red sin interceptar, para evitar cualquier interferencia
// con esos recursos (algunos usan respuestas parciales o redirecciones que
// pueden fallar al intentar guardarlas en caché).
self.addEventListener('fetch', (event) => {
  const req = event.request;

  if (req.method !== 'GET') return;

  let url;
  try {
    url = new URL(req.url);
  } catch (e) {
    return;
  }

  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(req).then((res) => {
      if (res && res.ok) {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone)).catch(() => {});
      }
      return res;
    }).catch(() => caches.match(req))
  );
});
