/*document.getElementById("ssubmit")
        .addEventListener("click", function() {
  document.getElementById("welcome").hidden = true;
  document.getElementById("hid").hidden = false;
  document.getElementById("ssubmit").hidden=true;
});
*/
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
var id;
document.getElementById("ssubmit")
        .addEventListener("click", function() {
        id=document.getElementById('uid');
        alert(id.value);
        var ref = firebase.database().ref(id.value);
        ref.on('value', gotOne, errData);
});
function gotOne(data) {
  var fruit = data.val();
  alert(fruit);
}
function errData(err){
  alert(err);
}