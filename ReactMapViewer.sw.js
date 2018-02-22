var CACHE_NAME = 'ReactMapViewer-cache-v1';
var urlsToCache = [
  './',
  './css/styles.css',
  './offline.html'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(
            (cache) => {
                // caches.delete(CACHE_NAME).then((obj) => {
                //     console.log('Deleted cache (install)', CACHE_NAME, obj, cache.keys());
                    cache.addAll(urlsToCache).then(() => {
                    console.log('Opened cache (install)', CACHE_NAME, cache.keys());
                    return cache;
                });
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
                        (cache) => cache.put(event.request, responseToCache),
                        (reason) => console.log("Error - Add to Cache", reason)
                    );
                    return response;
                }
                else 
                { 
                    // error: get from cache
                    getFromCache(event.request);
                    // caches.open(CACHE_NAME).then((cache) => {

                    //     try {
                    //         caches.match(event.request).then(
                    //             (response) => {
                    //                 // Cache hit - return response
                    //                 if (response) {
                    //                       console.log("Get from Cache:", event.request);
                    //                       return response;
                    //                 }
                    //             }, 
                    //             (reason) => {
                    //                 console.log('Error - Get from Cache:', reason);
                    //                 return cache.match('offline.html');
                    //             }
                    //         );
                    //     } catch (ex) {
                    //         console.log('Error - Get from Cache (1):', ex.message);
                    //         return cache.match('offline.html');
                    //     }
                    // });
                }
            }, 
            function(reason) {
                console.log('Error - Featch:', reason);
                getFromCache(event.request);
            }
        )
    );
});

getFromCache:function(request) {
    caches.open(CACHE_NAME).then((cache) => {
        try {
            caches.match(request).then(
                (response) => {
                    // Cache hit - return response
                    if (response) {
                          console.log("Get from Cache:", request);
                          return response;
                    }
                }, 
                (reason) => {
                    console.log('Error - Get from Cache:', reason);
                    return cache.match('offline.html');
                }
            );
        } catch (ex) {
            console.log('Error - Get from Cache (1):', ex.message);
            return cache.match('offline.html');
        }
    });    
}
