self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("parking").then(function(cache) {
      return cache.addAll([
        ".",
        "src/in.html",
        "src/in.html?homescreen=1",
        "?homescreen=1",
        "src/assets/noparking-icon-4x.png",
        "src/assets/NoParkingLocationsWithDesc.png",
        "src/assets/CharlesWright-Bold.woff"
      ]);
    })
  );
});
