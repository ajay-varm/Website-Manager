
import { initializeApp } from "firebase/app";
import { getDatabase,ref, set } from "firebase/database"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxAqhyYs0UDm2NGhZXiI8pEQ9GDiSgDpU",
  authDomain: "web-logins-8b63b.firebaseapp.com",
  databaseURL: "https://web-logins-8b63b-default-rtdb.firebaseio.com",
  projectId: "web-logins-8b63b",
  storageBucket: "web-logins-8b63b.appspot.com",
  messagingSenderId: "287483054692",
  appId: "1:287483054692:web:5f8663a071266ff1e36d71",
  measurementId: "G-J6HRVNJWCL"
};

initializeApp(firebaseConfig);

const auth = getAuth()
const db = getDatabase();
var database_ref = database.ref();

var path = window.location.pathname;

if(path == "/dist/welcome.html"){ 
 const logoutButton = document.querySelector('.logout')
 logoutButton.addEventListener('click', () => {
   signOut(auth)
     .then(() => {
       console.log('user signed out')
       window.location.href = "index.html";
     })
     .catch(err => {
       window.alert(err.message)
       console.log(err.message)
     })
 })
}

else if(path == "/dist/ajayss.html"){
  const insrtte = document.querySelector('.insrt')
  insrtte.addEventListener('submit', (e) => {
   e.preventDefault()
   const nameboxxe = insrtte.nameboxx.value
   const rollboxxe = insrtte.nameboxx.value
   const emailboxxe = insrtte.nameboxx.value
   set(ref(db, "thestudents/"+rollboxxe),{
     nameOf: nameboxxe,
     emailOf: emailboxxe
   })
   .then(()=>{
     console.log("good code");
     insrtte.reset()
     window.location.href = ("welcome.html")
   })
   .catch((error)=>{
      console.log("bad try again");
   }) })
}

else if (path == "/dist/signup.html"){
 const signupForm = document.querySelector('.signup')
 signupForm.addEventListener('submit', (e) => {
   e.preventDefault()
   const full_name = signupForm.full_name.value
   const email = signupForm.email.value
   const password = signupForm.password.value
   var user = auth.currentUser
   var user_data = 
    {
      full_name: full_name,
      email: email,
    }
   // database_ref.child('users/' + user.uid).set(user_data)
   createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user created:', cred.user)
       
      signupForm.reset()
      window.location.href = "welcome.html";
    })
    .catch((error) => 
     {
       document.getElementById("error").innerHTML = "Error:" + " " + error.code
       console.log(error.message)
     }
     )
     
  })
}

else if (path == "/dist/login.html"){
 const loginForm = document.querySelector('.login')
 loginForm.addEventListener('submit', (e) => {
   e.preventDefault()

   const email = loginForm.email.value
   const password = loginForm.password.value

   signInWithEmailAndPassword(auth, email, password)
     .then(cred => {
       console.log('user logged in:', cred.user)
       loginForm.reset()
       window.location.href = "welcome.html";
     })
     .catch((error) => 
     {
       document.getElementById("error").innerHTML = "Error:" + " " + error.code
       console.log(error.message)
     }
     )
 })
}

else if (path == "/dist/forgetpass.html"){
  const ForgetForm = document.querySelector('.passreq')
  ForgetForm.addEventListener('submit', (e) => {
   e.preventDefault()
   const email = ForgetForm.email.value
   sendPasswordResetEmail(auth, email)
      .then(() => {
       // alert("reset link send to your email")
        window.location.href = "login.html";

      })
      .catch((error) => 
      {
        document.getElementById("error").innerHTML = "Error:" + " " + error.code
        console.log(error.message)
      }
      )
 }

  )}


