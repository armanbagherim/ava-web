'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "db5f5afa69836099aece82aa9bcb92b9",
"version.json": "51f7adc832ada0b042160876603ccc9c",
"splash/img/light-2x.png": "9371a9e18df59f2bbe9b32e04c3fc5d4",
"splash/img/dark-4x.png": "e0346148103c17a87682a35525499afe",
"splash/img/light-3x.png": "da261be18bbda768fa1462fd8a8cef46",
"splash/img/dark-3x.png": "da261be18bbda768fa1462fd8a8cef46",
"splash/img/light-4x.png": "e0346148103c17a87682a35525499afe",
"splash/img/dark-2x.png": "9371a9e18df59f2bbe9b32e04c3fc5d4",
"splash/img/dark-1x.png": "db5b72b7f4b38640c974f20d9c90f464",
"splash/img/logo.svg": "a01710307e976ff3ad41850699ab7f5b",
"splash/img/light-1x.png": "db5b72b7f4b38640c974f20d9c90f464",
"splash/style.css": "740c493f9c5dfc859ca07663691b24fb",
"index.html": "9894799dc30e0e8217c5d2fa1d6f7fc0",
"/": "9894799dc30e0e8217c5d2fa1d6f7fc0",
"auth.html": "88530dca48290678d3ce28a34fc66cbd",
"main.dart.js": "121bf3a360ef865f228c8b38c2d82c5e",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "a409751f0ecf6dee76fb350d7402f9be",
"icons/Icon-192.png": "97f7226b0a52c22cfe1557cecce6763e",
"icons/512.png": "a3a8d9e73af9d61bd91b8274e838b8e0",
"icons/192.png": "313700bbbb919025a56c4b3583505df5",
"icons/Icon-512.png": "391892c6f6720429a9d4f93ec1ce5f4e",
"manifest.json": "f37d0e3b548687c1a6d5249a1c403487",
"main.dart.js_1.part.js": "771b0e7dd9e787f50e912c7d283fc897",
"assets/main.dart.js": "2f545ed7a91b54f030358347a658a78f",
"assets/flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"assets/NOTICES": "b229d8415e9bef404f5ac4d1393a7578",
"assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/FontManifest.json": "8acced4fbc1aeb7b66d211398b50be33",
"assets/AssetManifest.bin.json": "6fb2d88b4ed1a9c3dcb68c9051be782b",
"assets/main.dart.js_271.part.js": "d98eddc5febbb329906ddf66306b07dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b9209d635e53c24d59b5f743ff1c2fe0",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/handy_window/assets/handy-window-dark.css": "45fb3160206a5f74c0a9f1763c00c372",
"assets/packages/handy_window/assets/handy-window.css": "0434ee701235cf1c72458fd4ce022a64",
"assets/style.css": "740c493f9c5dfc859ca07663691b24fb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "a72237ec49fcc4dea18a2f9d02300681",
"assets/fonts/MaterialIcons-Regular.otf": "8f78bbdc04d72de4eba87c1ff289614b",
"assets/assets/logo_transparent.png": "056b82c87bdb47d07ed9b99dc3f92390",
"assets/assets/sas-emoji.json": "b9d99fc6dda6a3250af57af969b4a02d",
"assets/assets/banner.png": "0baa20d1bc5bb325a2a9c0f96b45a5e3",
"assets/assets/vodozemac/vodozemac_bindings_dart.js": "d8a180a7a69f7559dc198660737f1132",
"assets/assets/vodozemac/vodozemac_bindings_dart_bg.wasm": "9ed7979a1fd643a9672f474c31062f65",
"assets/assets/info-logo.png": "64bea878b2fb61c945ee80f5286d05c7",
"assets/assets/banner_transparent.png": "364e2030f739bf0c7ed1c061c4cb5901",
"assets/assets/sounds/notification.ogg": "d928d619828e6dbccf6e9e40f1c99d83",
"assets/assets/sounds/phone.ogg": "5c8fb947eb92ca55229cb6bbf533c40f",
"assets/assets/sounds/call.ogg": "7e8c646f83fba83bfb9084dc1bfec31e",
"assets/assets/favicon.png": "49f645bf75e9169d6e92f1f3eb47246e",
"assets/assets/logo.jpg": "67ed7e7f89faa84c13bf608c310594d1",
"assets/assets/logo.png": "fdf5ee40de0f3bfbafe3a91ade4e8deb",
"assets/assets/fonts/iransans/IRANSansXFaNum-Black.ttf": "71b39fcd5a99576f4ed5aa0452153d8f",
"assets/assets/fonts/iransans/IRANSansXFaNum-Bold.ttf": "4b67ac4a1cf16c1e0bd59bb2099e5ae7",
"assets/assets/fonts/iransans/IRANSansXFaNum-Regular.ttf": "27fad752d4c101730c76d75d98cf2183",
"assets/assets/fonts/iransans/IRANSansXFaNum-Thin.ttf": "2eef988f6412c129be8f28cce4684f98",
"assets/assets/fonts/iransans/IRANSansXFaNum-Medium.ttf": "3c08154f4d5e905b9b9724aeab3fbf39",
"assets/assets/fonts/iransans/IRANSansXFaNum-ExtraBold.ttf": "4b419c9a2f93c8e99825a6125268eb18",
"assets/assets/fonts/iransans/IRANSansXFaNum-UltraLight.ttf": "05b48fa25a38b20ad4658502ad33b3e1",
"assets/assets/fonts/iransans/IRANSansXFaNum-DemiBold.ttf": "9777f9e7551258ada77c590ce39679bc",
"assets/assets/fonts/iransans/IRANSansXFaNum-Light.ttf": "d223b4a19cdedd81c764c90f449c85ad",
"assets/assets/logo.svg": "d663e56a88152c6b9869c77ecbb1669d",
"assets/main.dart.js_2.part.js": "93244c7c8fedafc9ff314cd6998a6803",
"assets/light-1x.png": "db5b72b7f4b38640c974f20d9c90f464",
"FluffyChat.html": "9b7149b0014ff0656628d16ad0129474",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
