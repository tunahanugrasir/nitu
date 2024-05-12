'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7e700fa2fa4932964888da7a7b80f988",
".git/config": "7e850d3a77f53dd94859bd8a3e169e7c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7602ab9c761f65c252beeb754f70af07",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c1dca42db22de87d84a042e63180a142",
".git/logs/refs/heads/main": "edd2660e8c684f2a147a355aa997d6ae",
".git/objects/06/8547edda573b35684415e142dfe2ec9cb546d3": "b5cedb84bc12036fe4ab5ffbb49f2d5a",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0c/253d6cddfbdc53446de438fd8851b129c6ced5": "2f3b14494f18ac8631c3d9b86452df73",
".git/objects/0c/c875b5cf8af378abbcd9590be40c83e9e81084": "5189f71893e58d05c3ebb0a2361a7c8a",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/190f055ac8f4969c84dc3d773f14aab4876f1f": "1afdc9f01e186049f0bf3d6902d0d8cd",
".git/objects/1e/55519aae50200f660e04537fafe6134a1dddb0": "c3a7c9019d1b09007c91160524a79466",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/88b3a675f64730399789e8d7113fde4f48174a": "db1ab1962bd5665f3138175d5eef8a02",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2a/e6bdb506174782b0c717263001e6c7785a0250": "442a2bf5de262379a8cb344b08133d91",
".git/objects/2f/3f9695d2bde59df70e5e17b4cc210086ca061f": "d6eb335df4efd3a130d946231bf804c7",
".git/objects/41/7d97a9adcf7b731baea32ea2000f723d85dfa1": "d832b7888caed69ecf5a1d1621ad559d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/cea8b5d0b1cde9daa4a6ee29275bc66cf705cd": "af21740737bad96565b3a206f63d90bc",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/3902b69feaf2d0587826db9ab859e187e5c373": "4cf134d6cd6c9c7e6a2ea97ad29caf13",
".git/objects/58/0a23f55dec310c33910c8b7805216799d802de": "eca991016c71c60cb5301a6980973e70",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/b1652c759c6ad77368f3a278f7fa17ab0447b6": "510c9b06311f99fa40aa907df8460cde",
".git/objects/60/3d39991c3e555e2c25d17c2b43e80bf95f6702": "4ed05721c31d42e35cbde04d77fca63c",
".git/objects/65/23f6ff6ecc996ec2e679f8c708cbbdd8f3163a": "d0155ed55ab8905decddab0a5fef46ba",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/77/92b91a5e1acc432ed12ac21af1935edce0618a": "668161cf970abfeb1f542fda512d98ae",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/364a48e29ff438aabc5f7acbbc0fc3eece6120": "c05827527a0d6e27492110a27186bab6",
".git/objects/90/0918ddc3f1764c728f623bdcbd4428af656143": "0c1372d1e9d571f9dca5e9cae49a64c2",
".git/objects/92/43ab58b2910ae63393eb28ac5867237826d7e0": "1cccb6d59867d6fa9cddc25ed6890f25",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/cb5ec982a3de74cb9186f6af3ba329d63a22bb": "d3e46e1bac2e4a4d273eb4afaa060732",
".git/objects/b1/df7f5757198bec3b165e12bc139b94178b8f19": "f67e8ec05d72c3f15b42edcb80b5f72e",
".git/objects/b2/c6b488fa0d0ebf9036e6fd7577617e75f3c793": "4a42e1d808d41f79a424ac0e8176705f",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c2/43ea52e9b86b0a70df5220c6eee75efe492c05": "593bdb558b5e7579cb9c9973a87d86da",
".git/objects/c3/74f2b34f2d8a75f74641775970314b462cb337": "3d1d96fe377eaa6dd1ff8c5c70ebcbd3",
".git/objects/c3/97cf0f1d3403a59003c330f2b3bd8302807af4": "725d09df398fa741b089fb9b1d699664",
".git/objects/c5/8975cfcde18bcea0f95c21dc78a7e4d727879d": "3481e0f0624ed3a0f107a77d0f0e6653",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/9d4b5e7b929609e26e39f1f78c377e46c3d2b2": "8307f640798691605d1e567810146093",
".git/objects/d3/093cc6b5e9da33d59dc8cee4f89f4c5e6639f3": "98336abd9b0d99df4ce42fce43a28567",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/bc5aae85fd04e7027384701ca9da38ffed050a": "ca2561b74f70c4e890ca7ee0ca5b7057",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/330afd84e2f1ca9b8f9f894505e3efad086841": "4f3812413b7bbe4b2eee56bcfbdcd36e",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/ORIG_HEAD": "0d350b6c3b9bfa8cfb2a5c65f219720b",
".git/refs/heads/main": "0d350b6c3b9bfa8cfb2a5c65f219720b",
"assets/AssetManifest.bin": "4ca66ea7c1ad12f119a46f299872a240",
"assets/AssetManifest.bin.json": "5ab78cfab1253b6911816f8745abf037",
"assets/AssetManifest.json": "faa7433651d3b877868f4be57a733684",
"assets/assets/images/1.png": "82b8f993225a9b862467291629134732",
"assets/assets/images/2.png": "94f51477f455f795f16a7d06a9cba423",
"assets/assets/images/background.png": "214a0a70e9ae043a415827cac6e18193",
"assets/assets/images/bird_downflap.png": "90d735480ca11ffe8bc484d74d3d96c1",
"assets/assets/images/bird_midflap.png": "d3b2614fed6bea3ee9b2f05fa0f29093",
"assets/assets/images/bird_upflap.png": "0bd5de336539877152f2555da4fb44f9",
"assets/assets/images/clouds.png": "374513ba0744127e31d02df48b4b5612",
"assets/assets/images/dusenYuz.png": "faec4567200d6c818c2c05dc43651663",
"assets/assets/images/gameover.png": "b82eea6dbb4771dd5e9cd1cd7dc39648",
"assets/assets/images/ground.png": "177b44c637520dc293a834c27a9d7778",
"assets/assets/images/menu.jpg": "2fbd0163745b38c44f56df8ad4e47c3c",
"assets/assets/images/mesaj.png": "c47177b923eef1b45c7af82b86efcdf1",
"assets/assets/images/message.png": "72e7d3f9bb4f432a695ff01d40d33cbf",
"assets/assets/images/pipe.png": "091333756afc93b5b7990b1ee4c43e63",
"assets/assets/images/pipe_rotated.png": "fe5ae3384732b22c8bb0ce7eabfbecf1",
"assets/assets/images/yukselenYuz.png": "5d8d3e2766d3d4f14898b7c8d26b95cc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "3f779666d575859519e313ae1c60250a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "560640e0a9d36fa802c4c66a62b56bb8",
"/": "560640e0a9d36fa802c4c66a62b56bb8",
"main.dart.js": "e5eabbee48ae8bdef006b4035d7f9f3c",
"manifest.json": "adbf40610da6f9f5473a34085b02a21e",
"tunahanugrasir.github.io/.git/config": "2730ad1fdbb777c92a06edf9e927b238",
"tunahanugrasir.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"tunahanugrasir.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"tunahanugrasir.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"tunahanugrasir.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"tunahanugrasir.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"tunahanugrasir.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"tunahanugrasir.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"tunahanugrasir.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"tunahanugrasir.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"tunahanugrasir.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"tunahanugrasir.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"tunahanugrasir.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"tunahanugrasir.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"tunahanugrasir.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"tunahanugrasir.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"tunahanugrasir.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"version.json": "d8ed6f738009efe461cb92d11c27e8ea"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
