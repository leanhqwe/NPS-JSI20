import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signOut,
    updateProfile
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

import { auth } from "./firebase.js";
const form = document.getElementById("register-form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Ngăn trình duyệt reload
  
    // Lấy ra data người dùng nhập gồm: email & pass

    const email = form.email.value.trim();
    const password = form.password.value.trim();
  
    // xử lý với xác thực người dùng: đăng ký người dùng với email & pass
    createUserWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        const user = updateProfile.user;
        console.log(user); /// In ra gì?

        await sendEmailVerification();


      }
    );
  });
