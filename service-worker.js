/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4e66b692cfc91294f9180d329285fe0b"
  },
  {
    "url": "assets/css/0.styles.292e15e1.css",
    "revision": "5ac47b2ea99c9a5759a012aff3a1c23f"
  },
  {
    "url": "assets/img/helpmenu.63deede6.png",
    "revision": "63deede60d3ae2c19ba4c6e9ba30740c"
  },
  {
    "url": "assets/img/jetbrains.eae49d50.png",
    "revision": "eae49d50612915dd43858e0f73d50588"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.afa0650e.js",
    "revision": "bf887fe5599c0ca6d57ea300d8fb94d1"
  },
  {
    "url": "assets/js/11.8ffeaebe.js",
    "revision": "195f0314dc1e84200439e63de7b441f2"
  },
  {
    "url": "assets/js/12.1777c36f.js",
    "revision": "728051152af3e5ee8a1d80d36ee609c3"
  },
  {
    "url": "assets/js/13.f3f9663b.js",
    "revision": "55dbb539ca41a90d9b95436fe45ea202"
  },
  {
    "url": "assets/js/14.fbdbb5e9.js",
    "revision": "873a3fc7e8a56f5879b39be7140d579c"
  },
  {
    "url": "assets/js/2.64733279.js",
    "revision": "014fcfe877398f7ef618baf83d0f9075"
  },
  {
    "url": "assets/js/3.e61f74c4.js",
    "revision": "7defc03d3e87f3a3880a188c6194d50a"
  },
  {
    "url": "assets/js/4.72f409b4.js",
    "revision": "2557ab87131254932ec02ceb6b03d96e"
  },
  {
    "url": "assets/js/5.443f1220.js",
    "revision": "577d8d3c87fc506e8cc4bbd30155e14c"
  },
  {
    "url": "assets/js/6.99123e42.js",
    "revision": "3a07cd25d2f92f0c66b2515e4adc3ef0"
  },
  {
    "url": "assets/js/7.9ae26ad8.js",
    "revision": "29380c0346e1857603d406d23938b1f3"
  },
  {
    "url": "assets/js/8.2bc8fb1b.js",
    "revision": "116f1bc3755dbe6a3f52d030e035b985"
  },
  {
    "url": "assets/js/9.a8d62f5d.js",
    "revision": "c5e62bffed074f5f6230c53b0099755b"
  },
  {
    "url": "assets/js/app.5939ef92.js",
    "revision": "e406d2e1c530cd69dc263b0a6cb9acf2"
  },
  {
    "url": "favicons/android-icon-144x144.png",
    "revision": "a0683d6ad71bf4c60880c756f35c8a11"
  },
  {
    "url": "favicons/android-icon-192x192.png",
    "revision": "d6aac088e3316a5d7798f41197a24b17"
  },
  {
    "url": "favicons/android-icon-36x36.png",
    "revision": "e3c818d51ca5f257c8ce4784b1de6faf"
  },
  {
    "url": "favicons/android-icon-48x48.png",
    "revision": "51faecd00cbb6651e4c09234eae4fe0f"
  },
  {
    "url": "favicons/android-icon-72x72.png",
    "revision": "e766896e22377f30c3264b0d1a2a424d"
  },
  {
    "url": "favicons/android-icon-96x96.png",
    "revision": "dc8417115770f296b13f97e1cd05af25"
  },
  {
    "url": "favicons/apple-icon-114x114.png",
    "revision": "a0dd483851da07a7d25429932aa2170a"
  },
  {
    "url": "favicons/apple-icon-120x120.png",
    "revision": "4a4f3e2726153f4de7f7d9a8cddf2d8a"
  },
  {
    "url": "favicons/apple-icon-144x144.png",
    "revision": "a0683d6ad71bf4c60880c756f35c8a11"
  },
  {
    "url": "favicons/apple-icon-152x152.png",
    "revision": "f592faaec6d424094ae36f1c24d22dba"
  },
  {
    "url": "favicons/apple-icon-180x180.png",
    "revision": "380b78beb2fa388b1b38942b6ab19986"
  },
  {
    "url": "favicons/apple-icon-57x57.png",
    "revision": "4914cb079533fc08272f9340dab959a5"
  },
  {
    "url": "favicons/apple-icon-60x60.png",
    "revision": "746564dcb9743b75eb91c036050df80d"
  },
  {
    "url": "favicons/apple-icon-72x72.png",
    "revision": "e766896e22377f30c3264b0d1a2a424d"
  },
  {
    "url": "favicons/apple-icon-76x76.png",
    "revision": "96321bb8ace620ba90a2272cd15572c9"
  },
  {
    "url": "favicons/apple-icon-precomposed.png",
    "revision": "74c061c7136dd038833be4f01f0a504c"
  },
  {
    "url": "favicons/apple-icon.png",
    "revision": "74c061c7136dd038833be4f01f0a504c"
  },
  {
    "url": "favicons/favicon-16x16.png",
    "revision": "c19a943e06b6a15509a469ef19ac1a32"
  },
  {
    "url": "favicons/favicon-32x32.png",
    "revision": "2b5a1c4a3a7255a183521b72846edd8e"
  },
  {
    "url": "favicons/favicon-96x96.png",
    "revision": "dc8417115770f296b13f97e1cd05af25"
  },
  {
    "url": "favicons/icon-192x192.png",
    "revision": "acfdb2fecc89b27d5db8066c178eb565"
  },
  {
    "url": "favicons/icon-512x512.png",
    "revision": "acfdb2fecc89b27d5db8066c178eb565"
  },
  {
    "url": "favicons/ms-icon-144x144.png",
    "revision": "a0683d6ad71bf4c60880c756f35c8a11"
  },
  {
    "url": "favicons/ms-icon-150x150.png",
    "revision": "68f1030d5fe5baa3b4e74b18bdc07d67"
  },
  {
    "url": "favicons/ms-icon-310x310.png",
    "revision": "496d4d3a040b9aba51975fffc269641e"
  },
  {
    "url": "favicons/ms-icon-70x70.png",
    "revision": "f03c2c932e394f3ec507d6c5f89889a6"
  },
  {
    "url": "helpmenu.png",
    "revision": "63deede60d3ae2c19ba4c6e9ba30740c"
  },
  {
    "url": "index.html",
    "revision": "e44908ba8b30fc88a03339e9ca280b31"
  },
  {
    "url": "jetbrains.png",
    "revision": "eae49d50612915dd43858e0f73d50588"
  },
  {
    "url": "logo-nav.png",
    "revision": "5356779b19fd25216da729e609563d0e"
  },
  {
    "url": "logo.png",
    "revision": "58fd15aaac962f2aaf90d24e90eaaca9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})