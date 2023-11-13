import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyDOszdEc64TvZ3E_0DkqQLyykGC0KEAHaw",
//   authDomain: "signup-login-16aa7.firebaseapp.com",
//   projectId: "signup-login-16aa7",
//   storageBucket: "signup-login-16aa7.appspot.com",
//   messagingSenderId: "87290304115",
//   appId: "1:87290304115:web:963f44f9a599f8335d7c06",
//   measurementId: "G-5GN067QSQN"
// };


const firebaseConfig = {
  apiKey: "AIzaSyD0EPKQGGRB2CQYR53B_YGYql0YIRtftS0",
  authDomain: "todoapp-2130e.firebaseapp.com",
  projectId: "todoapp-2130e",
  storageBucket: "todoapp-2130e.appspot.com",
  messagingSenderId: "324539848438",
  appId: "1:324539848438:web:91ae4d2ec3d6d6233f3ed7",
  measurementId: "G-D5J3KFYFC3"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let container = document.getElementById('container')

// Signed up 



let btn = document.querySelector('#signup')
if (btn) {
  btn.addEventListener('click', () => {



    let email = document.querySelector('#semail')
    let password = document.querySelector('#spass')
    let cpassword = document.querySelector('#scpass')
    let suser = document.querySelector('#suser')
    let aemail = document.querySelector('#email')
    let auser = document.querySelector('#user')
    //  aemail.nodeValue = email.value
    //  auser.innerHTML = suser    
    if (password.value === cpassword.value) {


      createUserWithEmailAndPassword(auth, email.value, password.value)

        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          // alert('register ')
          // location.href = './login.html'
          container.classList.toggle('sign-in')
          container.classList.toggle('sign-up')
          email.value = '';
          password.value = '';
          cpassword.value = '';





        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          // ..
        });
    }

    else {
      alert('conform password are not same')
    }

  }

  )
}



let btn1 = document.querySelector('#signin')
if (btn1) {

  btn1.addEventListener('click', () => {



    let email = document.querySelector('#lemail')
    let password = document.querySelector('#lpass')

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        alert('wellcome');
        location.href = './todo.html'
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  })
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(user);
    // ...
  } else {
    // location.href = './index.html'      
    // User is signed out
    // ...
    // container.classList.toggle('sign-in')

    // container.classList.toggle('sign-up')
  }
});



const btnl = document.querySelector('#logout');


btnl.addEventListener('click', () => {
  signOut(auth).then(() => {
    console.log('logout succesfully');
    location.href = './index.html'
    // container.classList.toggle('sign-in')
    // container.classList.toggle('sign-up')

  }).catch((error) => {
    console.log(error);
  });
})