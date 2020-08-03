
var firebaseConfig = {
    "apiKey": "AIzaSyCNxvnfihV18e_weK_nnE6ZkGBbunsQENA",
    "authDomain": "waffle-891f9.firebaseapp.com",
    "databaseURL": "https://waffle-891f9.firebaseio.com",
    "projectId": "waffle-891f9",
    "storageBucket": "waffle-891f9.appspot.com",
    "messagingSenderId": "117594141529",
    "appId": "1:117594141529:web:01e510e9b3b286c55bd248"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  
  const auth = firebase.auth()
  
  
  function signUp() {
      var email = document.getElementById("txtE-mail").value;
      var password = document.getElementById("txtPass").value;

      window.alert(userEmail + "   " + userPass);
  }