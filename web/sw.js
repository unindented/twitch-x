importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/twitch-x/web/hls.0dda79fb9b4633b9b22e.js",
    "revision": "532880f7451bd3c57d2b1ec550956d0d"
  },
  {
    "url": "/twitch-x/web/index.5bb7c7d619795a13293a.js",
    "revision": "1f3f7a46659c341e09bad78679ef9f0f"
  },
  {
    "url": "/twitch-x/web/index.html",
    "revision": "f8ba86d6fe53edb41ff0dc2ff01af86e"
  },
  {
    "url": "/twitch-x/web/manifest.webmanifest",
    "revision": "d2f52109f0e992182d5d53f55b7bca74"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
