/* 
	Service worker V1 - Only show piece of static html without any thing served from server
*/

// var responseContent = `<html>
// 	<head>
// 		<meta http-equiv="X-UA-Compatible" content="IE=edge">
//   		<meta name="viewport" content="width=device-width, initial-scale=1">
// 		<title>Gotham Offline</title>
// 		<style>
// 			body {text-align: center; background-color: #333; color: #eee;}
// 		</style>
// 	</head>
// 	<body>
// 		<h1>Gotham Imperial Hotel</h1>
// 		<p>There seems to be a problem with your connection.</p>
// 		<p>>Come visit us at 1 Imperial Plaza, Gotham City for free WiFi.</p>
// 	</body>
// </html>`;

// self.addEventListener("fetch", (event) => {
// 	event.respondWith(
// 		fetch(event.request).catch(() => {
// 			console.log("Server is Offline");
// 			return new Response(responseContent, {headers: {"Content-Type": "text/html"}});
// 		})
// 	);
// });

/**
 * Service worker V2 - Show custom HTML page for users who visit website with no internet connection
 */

const CACHE_NAME = "website-offline-cache-v9";
var CACHED_URLS = [
	// Our HTML
	"/index.html",
	// Stylesheets
	"/css/gih.css",
	"/css/bootstrap.min.css",
	"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
	"https://fonts.googleapis.com/css?family=Lato:300,600,900",
	// JavaScript
	"https://code.jquery.com/jquery-3.0.0.min.js",
	"/js/app.js",
	"/js/offline-map.js",
	"/js/reservations-store.js",
	// Images
	"/img/logo.png",
	"/img/logo-header.png",
	"/img/event-calendar-link.jpg",
	"/img/switch.png",
	"/img/logo-top-background.png",
	"/img/jumbo-background-sm.jpg",
	"/img/jumbo-background.jpg",
	"/img/reservation-gih.jpg",
	"/img/about-hotel-spa.jpg",
	"/img/about-hotel-luxury.jpg",
	"/img/event-default.jpg",
	"/img/map-offline.jpg",
	// JSON
	"/events.json"
];

var googleMapsAPIJS = "https://maps.googleapis.com/maps/api/js?key="+
"AIzaSyDm9jndhfbcWByQnrivoaWAEQA8jy3COdE&callback=initMap";


self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			cache.addAll(CACHED_URLS);
		})
	);
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches.keys().then(cacheNames => {
			console.log("CacheNames: ", cacheNames);
			return Promise.all(
				cacheNames.map((cacheName) => {
					if (cacheName !== CACHE_NAME && cacheName.startsWith("website-offline-cache")) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});

self.addEventListener("fetch", (event) => {
	var requestURL = new URL(event.request.url);
	if (requestURL.pathname === "/" || requestURL.pathname === "/index.html") {
		event.respondWith(
			caches.open(CACHE_NAME).then((cache) => {
				return cache.match("/index.html").then((cachedRes) => {
					var fetchPromise = fetch("/index.html").then((res) => {
						cache.put("/index.html", res.clone());
					});
					return cachedRes || fetchPromise;
				});
			})
		);
	} else if (requestURL.href === googleMapsAPIJS) {
		event.respondWith(
			fetch(`${googleMapsAPIJS}&${Date.now()}`, {mode: 'no-cors', cache: "no-store"}).catch(() => {
				return caches.match("/js/offline-map.js");
			})
		);
	} else if (requestURL.pathname == "/events.json") {
		event.respondWith(
			caches.open(CACHE_NAME).then((cache) => {
				return fetch(event.request).then(newtworkResponse => {
					cache.put(event.request, newtworkResponse.clone());
					return newtworkResponse;
				}).catch(() => {
					return caches.match(event.request);
				});
			})
		);
	} else if (requestURL.pathname.startsWith("/img/event-")) {
		event.respondWith(
			caches.open(CACHE_NAME).then((cache) => {
				return cache.match(event.request).then((cachedRes) => {
					return cachedRes || fetch(event.request).then((networkRes) => {
						cache.put(event.request, networkRes.clone());
						return networkRes;
					}).catch(() => {
						return cache.match("/img/event-default.jpg");
					});
				});
			})
		);
	} else if (requestURL.host == "www.google-analytics.com") {
		event.respondWith(fetch(event.request));
	} else if (CACHED_URLS.includes(requestURL.href) || CACHED_URLS.includes(requestURL.pathname)) {
		event.respondWith(
			caches.open(CACHE_NAME).then(cache => {
				return cache.match(event.request).then(cachedRes => {
					return cachedRes || fetch(event.request);
				});
			})
		);
	}
});

/**
 * Service worker LifeCycle
 */

// self.addEventListener("install", () => {console.log("install");});
// self.addEventListener("activate", () => {console.log("activate");});
// self.addEventListener("fetch", (event) => {
// 	if (event.request.url.includes("bootstrap.min.css")) {
// 		console.log("Fetch requset for:", event.request);
// 		event.respondWith(
// 			new Response(
// 				".hotel-slogan {background: red !important} nav {display: none}",
// 				{headers: {"Content-Type":"text/css"}}
// 			)
// 		);
// 	}
// });