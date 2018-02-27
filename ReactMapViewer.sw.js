// https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js

const CACHE_VERSION = 1;
const CACHES = {
  prefetch: 'ReactMapViewer-cache-v' + CACHE_VERSION,
  offline: 'ReactMapViewer-offline-v' + CACHE_VERSION
};


self.addEventListener('install', (event) => {
    const now = Date.now();

    const urlsToCache = [
        './',
        './index.html',      
        './offline.html',
        './images/logo.png',
        './images/flag.CA.22.png',
        './images/flag.US.22.png',
        './images/flag.FR.22.png',
        './css/styles.css',
        './css/main.css',
        './css/jquery-ui.min.css',

        './lib/responsivevoice.js',
        './lib/jquery-1.12.4.min.js',
        './lib/jquery-ui.min.js',
        './lib/arcgis.dojo-4.6.js',
        // './lib/self',
        './lib/worker.js',
        './lib/react.development.js',
        './lib/dojo/nls/dojo_ROOT.js',

        './js/Production/RMap.js',
        './js/Production/NavMenu.js',
        './js/Production/NavBar.js',
        './js/Production/Panels.js',
        './js/Production/PanelLegend.js',
        './js/Production/PanelLayers.js',
        './js/Production/PanelAdvancedMenu.js',
        './js/Production/Help.js',
        './js/Production/Layout.js',
        './lib/react-dom.development.js',
        // '//js.arcgis.com/4.6/esri/themes/base/icons/fonts/CalciteWebCoreIcons.ttf?cu4poq',
        // 'https://www.arcgis.com/sharing/rest/portals/self?f=json&culture=en',
        './fonts/Avenir_Next_W00_400.woff2',
        './fonts/glyphicons-halflings-regular.woff2',
        './fonts/CalciteWebCoreIcons.ttf',
        // '//unpkg.com/babel-standalone@6.15.0/babel.min.js',
    ];

    event.waitUntil(
        caches.open(CACHES.prefetch).then((cache) => {
            const cachePromises = urlsToCache.map((urlToPrefetch) => {
            const url = new URL(urlToPrefetch, location.href);
            url.search += (url.search ? '&' : '?') + 'cache-bust=' + now;
            const request = new Request(url, {mode: 'no-cors'});
            return fetch(request).then((response) => {
                if (response.status >= 400) {
                    throw new Error('request for ' + urlToPrefetch +
                      ' failed with status ' + response.statusText);
                }

                // Use the original URL without the cache-busting parameter as the key for cache.put().
                return cache.put(urlToPrefetch, response);
                }).catch((error) => {
                    console.error('Not caching:',urlToPrefetch, url, error);
                });
            });

            return Promise.all(cachePromises).then(() => {
                console.log('Pre-fetching complete.');
            });
        }).catch((error) => {
            console.error('Pre-fetching failed:', error);
        })
    );
});

self.addEventListener('activate', (event) => {
    const expectedCacheNames = Object.keys(CACHES).map((key) => {
        return CACHES[key];
    });

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (expectedCacheNames.indexOf(cacheName) === -1) {
                        // If this cache name isn't present in the array of "expected" cache names, then delete it.
                        console.log('Deleting out of date cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
        if (response) {
            // console.log('Found response in cache for:', event.request);

            return response;
        }
        
        // const url = new URL(event.request.url , location.href);
        // url.search += (url.search ? '&' : '?') + 'cache-bust=' + Date.now();
        // const request = new Request(event.request.url, {mode: 'no-cors'});

        event.request.mode = 'no-cors';
        return fetch(event.request).then((response) => {
            if (response.url !== '' && response.status < 400) {//} && response.type !== 'opaque') {
                const clonedResponse = response.clone();
                caches.open(CACHES.offline).then((cache) => {
                    cache.put(event.request, clonedResponse);
                });
            }

            return response;
        }).catch((error) => {
            console.error('Fetching failed:', error, event.request);
            caches.open(CACHES.prefetch).then((cache) => {
                return cache.match('offline.html').then((response) => {
                    // console.log('Offline Response:', response.clone())
                    return response;
                });
            });
        });
    }));
});