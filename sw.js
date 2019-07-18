"use strict";
importScripts("sw-toolbox.js");
toolbox.precache(["index.html","assets/css/fontawesome-all.min.css","assets/css/main.css","images/bg.jpg","images/pic01.jpg","images/pic02.jpg","images/pic03.jpg","images/pic05.jpg","assets/css/images/arrows.swg","assets/css/images/overlay.png",]);
toolbox.router.get("images/*", toolbox.cacheFirst); toolbox.router.get("/*", toolbox.networkFirst, { networkTimeoutSeconds: 5});

