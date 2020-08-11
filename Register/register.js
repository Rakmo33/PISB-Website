  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAqZg4mfT-olnnXrbACYwfSUKLXbilu05M",
    authDomain: "pisb-register.firebaseapp.com",
    databaseURL: "https://pisb-register.firebaseio.com",
    projectId: "pisb-register",
    storageBucket: "pisb-register.appspot.com",
    messagingSenderId: "567975996062",
    appId: "1:567975996062:web:76df9477c9480119ac298f",
    measurementId: "G-RN568ZZ7KQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function registerUser(){
      var email=document.getElementById("email");
      var password= document.getElementById("pass");
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
          alert("registered successfully");

      }).catch(function(error){
          alert("error.message");
      })
  }