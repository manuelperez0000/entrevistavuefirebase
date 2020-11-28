  var firebaseConfig = {
    apiKey: "AIzaSyC09uKg6pJQod9_TQAgeNQ0kdFdB4DUMOE",
    authDomain: "candy-disco.firebaseapp.com",
    databaseURL: "https://candy-disco.firebaseio.com",
    projectId: "candy-disco",
    storageBucket: "candy-disco.appspot.com",
    messagingSenderId: "694210130024",
    appId: "1:694210130024:web:1b3818aa9b438b41d78bdd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore()