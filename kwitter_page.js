var firebaseConfig = {
    apiKey: "AIzaSyCW9QmO8Ciq4rQLiWukFNuFsJc0wTTcKKs",
    authDomain: "letschatwebapp-95a9b.firebaseapp.com",
    databaseURL: "https://letschatwebapp-95a9b-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-95a9b",
    storageBucket: "letschatwebapp-95a9b.appspot.com",
    messagingSenderId: "1038185656596",
    appId: "1:1038185656596:web:f98d5906075af55625d201"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
    user_name = localStorage.getItem("Username");

    console.log("room name "+room_name);
    console.log("user name "+user_name);

    function logout() {
          localStorage.removeItem("Roomname");
          localStorage.removeItem("Username");
          window.location.replace("index.html");
    }
    function send() {
          msg = document.getElementById("msg").value;
          console.log("Message "+msg);
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0,
                dislike:0
          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      
//End code
      } });  }); }
getData();
