import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyCX_uqnOzpClZsp-1jfo3DDSYgY_CJ9Fxg",
    authDomain: "kalahari-26384.firebaseapp.com",
    databaseURL: "https://kalahari-26384.firebaseio.com",
    projectId: "kalahari-26384",
    storageBucket: "kalahari-26384.appspot.com",
    messagingSenderId: "122718140315"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;