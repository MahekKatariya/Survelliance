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
var flag,selectFile;
document.getElementById('cform').addEventListener('submit',fun);
function fun(e){
    e.preventDefault(); 
    var email=getVal('uname');
    var pass=getVal('pass');
    var aname=getVal('aname');
    var id=getVal('bid');
    var bg=getVal('bg');
    var des=getVal('des');
    var med=getVal('med');
    saveData(email,aname,pass,id,bg,des,med);
}
img.addEventListener('change',function(e){
  selectFile=e.target.files[0];
});
function getVal(id){
    return document.getElementById(id).value;
}
function saveData(email,aname,pass,id,bg,des,med){
    flag=0;
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        flag=1;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
    });
    if(flag==0){
      
      var sref=firebase.storage().ref('/images/'+ selectFile.name);
      var ut=sref.put(selectFile);
      ut.on('state_changed',function(snapshot){
      }, function(error){
            console.log(error);
        },
        function(){
          //iurl=ut.snapshot.downloadURL;
          ut.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            var iurl=downloadURL.toString();
            firebase.database().ref(id).set({
              Name: aname,
              Email: email,
              Bloodgroup: bg,
              Designation: des,
              Medical: med,
              Image: iurl
            });
          });  
      });
      //console.log(iurl);
      
    }


}