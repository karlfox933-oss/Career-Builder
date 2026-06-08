// Service Worker pour Firebase Cloud Messaging
// Fichier : firebase-messaging-sw.js
// A placer a la RACINE du site (meme niveau que index.html)

importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCYA8YzbDw1yyH4ogX2CGkMZQVPwm4J1xE",
  authDomain: "optracker-4111e.firebaseapp.com",
  projectId: "optracker-4111e",
  storageBucket: "optracker-4111e.firebasestorage.app",
  messagingSenderId: "560783513410",
  appId: "1:560783513410:web:04c94f2b75b914bc6f9adb"
});

const messaging = firebase.messaging();

// Notification en arriere-plan
messaging.onBackgroundMessage(function(payload) {
  console.log("Notification en arriere-plan:", payload);
  var title = (payload.notification && payload.notification.title) || "OpTracker";
  var body  = (payload.notification && payload.notification.body)  || "Nouvelle opportunite disponible";
  self.registration.showNotification(title, {
    body:  body,
    icon:  "/icon-192.png",
    badge: "/icon-192.png",
    tag:   "optracker-notif",
    data:  payload.data || {}
  });
});

// Clic sur la notification
self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("https://vocal-cupcake-1243fe.netlify.app")
  );
});
