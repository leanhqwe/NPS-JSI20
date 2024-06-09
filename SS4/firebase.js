 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDXQnbIgcYhOLa5XzWd1Gmw_P4eM02Fzvs",
   authDomain: "nps-jsi20-pj.firebaseapp.com",
   projectId: "nps-jsi20-pj",
   storageBucket: "nps-jsi20-pj.appspot.com",
   messagingSenderId: "534345171628",
   appId: "1:534345171628:web:064335d6bb52ca81349509",
   measurementId: "G-MJHVNKKH37"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig); 
 export const analytics = getAnalytics(app);
 export const auth = getAuth(app);