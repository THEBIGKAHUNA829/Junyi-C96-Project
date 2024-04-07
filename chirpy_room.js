// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD__T6tan4gCQ2Z4i9xML4A642rovqEkiA",
      authDomain: "chirpy-139bb.firebaseapp.com",
      databaseURL: "https://chirpy-139bb-default-rtdb.firebaseio.com",
      projectId: "chirpy-139bb",
      storageBucket: "chirpy-139bb.appspot.com",
      messagingSenderId: "1056885564006",
      appId: "1:1056885564006:web:0aedbe69b0373908c6c3a7"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
