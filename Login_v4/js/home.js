var firebaseConfig = {
    apiKey: "AIzaSyBEcGRX3MVgFeFX8g0-16zPtpHVEI-NgMQ",
    authDomain: "survey-11.firebaseapp.com",
    databaseURL: "https://survey-11.firebaseio.com",
    projectId: "survey-11",
    storageBucket: "survey-11.appspot.com",
    messagingSenderId: "55566602005",
    appId: "1:55566602005:web:6b20c34445f9567b"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
if (firebase.auth().currentUser) {
  alert("Please Login First");
  window.location.href = "index.html";
}
var signOut=document.getElementById('signOut');
signOut.addEventListener('click',w =>{
  w.preventDefault();
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
    alert("Sign out success");
    window.location.href = "index.html";
}
});
