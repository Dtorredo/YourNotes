self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("notes-v4").then((cache) => {
      return cache
        .addAll([
          "/",
          "/index.html",
          "/style.css",
          "/interface.js",
          "/store.js",
          "/collaboration.js",
          "/migrate.js",
        ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = ["notes-v4"];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
