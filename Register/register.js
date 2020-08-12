      var auth=firebase.auth();
      var db=firebase.database();

      var reg=document.getElementById("register");

      reg.addEventListener("click", (e)=>{
        e.preventDefault();
        console.log("in register");
          var email=document.getElementById("email").value;
          var password= document.getElementById("pass").value;
          var fname=document.getElementById("fname").value;
          var lname= document.getElementById("lname").value;
          var dob= document.getElementById("dob").value;
          var branch= document.getElementById("branch").value;
          var prof= document.getElementById("prof").value;
          console.log(email);
          console.log(password);
          firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
            //   alert("registered successfully");
            var id= firebase.auth().currentUser.uid;
            firebase.database().ref('/Members/'+id).set({
              first_name:fname,
              last_name:lname,
              dateOfBirth:dob,
              branch:branch,
              profession:prof
            });
            document.getElementById("form").reset();           
      }).catch(function(error) {
        console.log(error.message);
      })
    })
      
      