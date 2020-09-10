      var auth=firebase.auth();
      var db=firebase.database();

      var reg=document.getElementById("logInBtn");
      var logout= document.getElementById("logOut");

      reg.addEventListener("click", (e)=>{
        e.preventDefault();
          var email=document.getElementById("email").value;
          var password= document.getElementById("pass").value;
          
          var promise =firebase.auth().signInWithEmailAndPassword(email, password);
            document.getElementById("login").reset();    
            promise.catch(function(error) {
              alert(error.message);
            })
            alert("logged In successfully !!");
      })
      

      logout.addEventListener('click', e=>{
        firebase.auth().signOut();
        alert("logged Out Successfully!")
      })

      firebase.auth().onAuthStateChanged(firebaseUser =>{
        if(firebaseUser){
          logout.classList.remove('Hide');
        }else{
          console.log("notlogged in");
          logout.classList.add('Hide');
        }
      })
    
      
      