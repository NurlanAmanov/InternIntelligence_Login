// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


function passshows() {  
  const pass = document.getElementById('password'); 
  const hideshow2 = document.getElementById('passimg');

  if (pass.type === 'password') {
      pass.type = 'text';  
      hideshow2.src = "../img/password-show.svg";  
  } else {
      pass.type = 'password'; 
      hideshow2.src = "../img/password-hide.svg";  
  }
}
const firebaseConfig = {
  apiKey: "AIzaSyDavGpRmSUSkg0-qkqlyPumxFDwUN_QEWc",
  authDomain: "login-intelin.firebaseapp.com",
  projectId: "login-intelin",
  storageBucket: "login-intelin.firebasestorage.app",
  messagingSenderId: "590082194179",
  appId: "1:590082194179:web:fa7b4b9195324cb17b0736",
  measurementId: "G-YXGTRT5QL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get Firebase Auth instance
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", function() {
    const button2 = document.getElementById('button2');
    const notification = document.getElementById('notification'); // Bildiriş konteyneri
    
    button2.addEventListener("click", function(event) {
      event.preventDefault();
  
      const mail = document.getElementById('email').value;
      const pass = document.getElementById('password').value;
  
      signInWithEmailAndPassword(auth, mail, pass)
        .then((userCredential) => {
         
          const user = userCredential.user;
  
   
          notification.innerHTML = `
          <div class="bg-green-100 text-green-800 p-4 rounded-lg" role="alert">
        <strong class="font-bold text-sm mr-4">Success!</strong>
        <span class="block text-sm sm:inline max-sm:mt-2">Login successful please wait</span>
      </div>
          `;
  
    
          setTimeout(() => {
            window.location.href = "https://github.com/NurlanAmanov"; // Düzgün URL
          }, 2000);
        })
        .catch((error) => {
          const errorMessage = error.message;
  
          // Xəta bildirişi göstər
          notification.innerHTML = `
            <div class="alert alert-danger" role="alert">
              Xəta: ${errorMessage}
            </div>
          `;
        });
    });
  });



