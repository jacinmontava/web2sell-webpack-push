// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyBrCYopoUuCtFVc0RiFWdhMvOzcYOnqGYY",
    authDomain: "testpushweb-50730.firebaseapp.com",
    databaseURL: "https://testpushweb-50730.firebaseio.com",
    projectId: "testpushweb-50730",
    storageBucket: "testpushweb-50730.appspot.com",
    messagingSenderId: "772404293509",
    appId: "1:772404293509:web:150cefe3c9a17791ca1eec"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

/**
 * Authorization:key=AAAAs9biL4U:APA91bEqH4u2Bpdl6Nj9nvEJBf_V-CQ2P1wqvOZWWKy8YXsW74VcznkdjBfDgV9xsKuy0qMs6-Z1b6tpX3pwgOcP4-98D9pF2wcrtFlkDXvNKG31-lBbjcmIkJCsXq3gSjuqEi6ZxVi6
 * { "notification": { "title": "Title of message", "body": "Notification body", "icon": "icon-route" }, "to" : "fglpuV3pd4zF2ffzBF7Itw:APA91bHhtm6lDuwSyEgqEWxNWDuJJeMkMQdgs-n1E4A6e3IoVi-1RLWwR5JFm55dtEA3mKIWjeXjlbjxvps_2a4UB8m_DUn6JqkW5hC75HqfgaQU4ryGSJONXYJ1Kr2alMB-VrdQ0fEe" }
 * curl https://fcm.googleapis.com/fcm/send --header "Authorization:key=AAAAs9biL4U:APA91bEqH4u2Bpdl6Nj9nvEJBf_V-CQ2P1wqvOZWWKy8YXsW74VcznkdjBfDgV9xsKuy0qMs6-Z1b6tpX3pwgOcP4-98D9pF2wcrtFlkDXvNKG31-lBbjcmIkJCsXq3gSjuqEi6ZxVi6" --header "Content-Type:application/json" -d '{ "notification": { "title": "Hey amigo, lee esto!", "body": "Felicidades!! Has recibido una gloriosa notificación", "icon": "/notificaciones/images/user-icon.png" }, "to" : "fglpuV3pd4zF2ffzBF7Itw:APA91bHhtm6lDuwSyEgqEWxNWDuJJeMkMQdgs-n1E4A6e3IoVi-1RLWwR5JFm55dtEA3mKIWjeXjlbjxvps_2a4UB8m_DUn6JqkW5hC75HqfgaQU4ryGSJONXYJ1Kr2alMB-VrdQ0fEe" }'
 */

 /*

 {
  "message": {
    "token" : {{USER_TOKEN}},
    "notification": {
      "title": "FCM Message",
      "body": "This is a message from FCM"
    },
    "webpush": {
      "headers": {
        "Urgency": "high"
      },
      "notification": {
        "body": "This is a message from FCM to web",
        "requireInteraction": "true",
        "badge": "https://d2f7anuvnar8n5.cloudfront.net/p/assets/animations/hurricane_1e8e060c71635d9c72b776820991d419.png"
      }
    }
  }
}

{
    "notification": {
        "title": "Web Notification",
        "body": "Testing web push notifications",
        "icon": "https://d2f7anuvnar8n5.cloudfront.net/p/assets/animations/hurricane_1e8e060c71635d9c72b776820991d419.png",
        "click_action": "http://127.0.0.1:5500/testpush.html"
    },
    "to": "{{USER_TOKEN}}"
}
*/
