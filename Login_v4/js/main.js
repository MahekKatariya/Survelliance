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
document.getElementById('cform').addEventListener('submit',fun);
function fun(e){
    e.preventDefault();
    
    var email=getVal('uname');
    var pass=getVal('pass');
    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        
      });
   
   
}
function initApp() {
    
    firebase.auth().onAuthStateChanged(function(user) {
    
      if (user) {
          alert("Welcome "+user.email);
          window.location.href = "home.html";

      }
    });
}
function getVal(id){
    return document.getElementById(id).value;
}
window.onload = function() {
    initApp();
  };
/*(function () {
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
    
      const uname=document.getElementById('uname').value;
      const pass=document.getElementById('pass').value;
      const auth= auth=Firebase.auth();
      const blogin=document.getElementById('blogin');
      const pr;
    "use strict";
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    } 
    blogin.addEventListener('click', e >= {
        //const email=uname.value;
        //const password=pass.value;
       
        pr=auth.signInWithEmailAndPassword(email,password);
        pr.catch(e>=console.log(e.message));

    });
    firebase.auth.onAuthStateChanged(firebaseUser >= {
        if(firebase)
            console.log(firebaseUser);
    });
    
    

})(jQuery);*/