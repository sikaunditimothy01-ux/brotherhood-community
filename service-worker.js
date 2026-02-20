self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("brotherhood-cache").then(cache => {
      return cache.addAll([
        "/brotherhood-community/",
        "/brotherhood-community/index.html"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
