var CACHE_NAME = 'ReactMapViewer-cache-v1';
var urlsToCache = [
  // './',
  '../css/styles.css'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(
            function(cache) {
                caches.delete(CACHE_NAME).then(function() {
                    console.log('Opened cache (install)', CACHE_NAME, cache.keys());
                });
                return cache.addAll(urlsToCache);
            },
            function(reason) {
                console.log('Error - Opened cache (install)', CACHE_NAME, reason);
            }
        )
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request).then(
            function(response) {
                // console.log('fetch response', response.status, response);
                if(response && response.status <= 400) {
                    var responseToCache = response.clone();

                    caches.open(CACHE_NAME).then(
                        function(cache) {
                            // console.log("Add to Cache", event.request, responseToCache);

                            cache.put(event.request, responseToCache);
                        },
                        function(reason) {
                            console.log("Error - Add to Cache", reason);
                        });
                    return response;
                }
                else { 
                    // error: get from cache
                    caches.open(CACHE_NAME).then(function(cache) {

                        caches.match(event.request).then(
                            function(response) {
                                // Cache hit - return response
                                if (response) {
                                  console.log("Get from Cache", event.request, response);
                                  return response;
                                }
                            }, function(reason) {
                                console.log('Error - Get from Cache', reason);
                                return null;
                            }
                        );
                    });
                }
            }, 
            function(reason) {
                console.log('Error - Featch', reason);
            }
        )
    );
});

