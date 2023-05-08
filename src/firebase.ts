import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjdASQC-r1msbt3obCGhOnNUoT_yTvi9w",
    authDomain: "the-time-hotel-6ef9d.firebaseapp.com",
    projectId: "the-time-hotel-6ef9d",
    storageBucket: "the-time-hotel-6ef9d.appspot.com",
    messagingSenderId: "811509705233",
    appId: "1:811509705233:web:105c6da1d139a08ca09fb0",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db, firebaseApp };
