const firebaseConfig = {
    apiKey: "AIzaSyABEJNcSV5_pbr7Oqwmj62W73-MAMm4Sxs",
    authDomain: "blogging-website-4a5b6.firebaseapp.com",
    projectId: "blogging-website-4a5b6",
    storageBucket: "blogging-website-4a5b6.appspot.com",
    messagingSenderId: "341139666820",
    appId: "1:341139666820:web:781ce3e2d7747901864fd1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  let db = firebase.firestore();