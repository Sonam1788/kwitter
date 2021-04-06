
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
  apiKey: "AIzaSyBdmaRjLgiLkQUCWC-XgnlF3aluFAMQaSo",
  authDomain: "kwitter-929c0.firebaseapp.com",
  databaseURL: "https://kwitter-929c0-default-rtdb.firebaseio.com",
  projectId: "kwitter-929c0",
  storageBucket: "kwitter-929c0.appspot.com",
  messagingSenderId: "458724594741",
  appId: "1:458724594741:web:37e54fc3b29d052e434d7c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;

  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}