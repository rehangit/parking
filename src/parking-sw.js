self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("parking").then(function(cache) {
      return cache.addAll([
        ".",
        "index.html",
        "index.html?homescreen=1",
        "?homescreen=1",
        "assets/noparking-icon-4x.png",
        "assets/NoParkingLocationsWithDesc.png",
        "assets/CharlesWright-Bold.woff",
        "assets/favicon-32x32.png",
        "assets/favicon-96x96.png",
        "assets/favicon-16x16.png"
      ]);
    })
  );
});
