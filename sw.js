"use strict";
importScripts("sw-toolbox.js");
toolbox.precache(["index.html","assets/css/font-awesome.min.css","assets/css/main.css","images/bg.jpg",]);
toolbox.router.get("images/*", toolbox.cacheFirst); toolbox.router.get("/*", toolbox.networkFirst, { networkTimeoutSeconds: 5});

