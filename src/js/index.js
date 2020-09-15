// The core Firebase JS SDK is always required and must be listed first
// import 'https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js';
// import 'https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js';
import * as firebase from 'firebase/app';
import 'firebase/messaging';
import Fingerprint2 from 'fingerprintjs2'

// TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrCYopoUuCtFVc0RiFWdhMvOzcYOnqGYY",
    authDomain: "testpushweb-50730.firebaseapp.com",
    databaseURL: "https://testpushweb-50730.firebaseio.com",
    projectId: "testpushweb-50730",
    storageBucket: "testpushweb-50730.appspot.com",
    messagingSenderId: "772404293509",
    appId: "1:772404293509:web:150cefe3c9a17791ca1eec"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messaging = firebase.messaging();
messaging.requestPermission()
    .then(function () {
        console.log('Se han aceptado las notificaciones');
        return messaging.onTokenRefresh();
    })
    .then(function () {
        return messaging.getToken();
    })
    .then((currentToken) => {
        if (currentToken) {
            $('p.token').html(currentToken);
            console.log('token', currentToken);
        } else {
            // Show permission request.
            console.log('No Instance ID token available. Request permission to generate one.');
        }

        Fingerprint2.get(function (components) {
            console.log('components fingerprint', components) // an array of components: {key: ..., value: ...}
            var values = components.map(function (component) { return component.value })
            var murmur = Fingerprint2.x64hash128(values.join(''), 31)
            console.log('fingerprint', murmur);
        });

        /* $.getJSON('https://httpbin.org/ip', function (data) {
            console.log(data['origin']);
            $.getJSON('http://api.ipstack.com/'+data['origin']+'?access_key=0fc8294c5f4f6826e42af13e030fe178', function (data) {
                console.log(JSON.stringify(data, null, 2));
            });
        }); */
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        /* showToken('Error retrieving Instance ID token. ', err);
        setTokenSentToServer(false); */
    });

messaging.onMessage(function (payload) {
    console.log("Mensaje recibido con el sitio activo", payload);
});