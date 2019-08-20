"use strict";
importScripts("sw-toolbox.js");
toolbox.precache(["index.html","assets/css/fontawesome-all.min.css","assets/css/main.css","images/background.webp","images/about-me.webp","images/help.webp","images/services.webp","images/therapy.webp","images/logo.webp","images/NataliaRainyk.webp","assets/css/images/overlay.webp",]);
toolbox.router.get("images/*", toolbox.cacheFirst); toolbox.router.get("/*", toolbox.networkFirst, { networkTimeoutSeconds: 5});

