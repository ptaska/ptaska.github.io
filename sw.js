"use strict";
importScripts("sw-toolbox.js");
toolbox.precache(["index.html","assets/css/fontawesome-all.min.css","assets/css/main.css","images/background.jpg","images/about-me.jpg","images/help.jpg","images/services.jpg","images/therapy.jpg","images/logo.jpg","images/NataliaRainyk.jpg","assets/css/images/overlay.png",]);
toolbox.router.get("images/*", toolbox.cacheFirst); toolbox.router.get("/*", toolbox.networkFirst, { networkTimeoutSeconds: 5});

