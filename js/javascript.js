document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form.login");
  const signupForm = document.querySelector("form.signup");

  // Fungsi untuk mengubah tampilan form login dan daftar
  const loginText = document.querySelector(".title-text .login");
  const loginBtn = document.querySelector("label.login");
  const signupBtn = document.querySelector("label.signup");
  // const signupLink = document.querySelector("form .signup-link a");

  signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
  };

  loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
  };

  signupLink.onclick = () => {
    // signupBtn.click();
    return false;
  };

  // let registeredAccounts = JSON.parse(localStorage.getItem("registeredAccounts")) || {};

  // loginForm.addEventListener("submit", function (e) {
  //   e.preventDefault();

  //   const email = loginForm.querySelector('input[type="email"]').value;
  //   const password = loginForm.querySelector('input[type="password"]').value;

  //   if (registeredAccounts[email] && registeredAccounts[email] === password) {
  //     window.location.href = "index.html";
  //   } else {
  //     alert("Login gagal. Email atau password salah.");
  //   }
  // });

  // signupForm.addEventListener("submit", function (e) {
  //   e.preventDefault();

  //   const nama = signupForm.querySelector('input[name="nama"]').value;
  //   const email = signupForm.querySelector('input[type="email"]').value;
  //   const password = signupForm.querySelector('input[type="password"]').value;
  //   const ulangiPassword = signupForm.querySelector('input[name="ulangiPassword"]').value;

  //   if (registeredAccounts[email]) {
  //     alert("Email ini sudah terdaftar. Silakan gunakan email lain.");
  //   } else if (password !== ulangiPassword) {
  //     alert("Password tidak cocok. Silakan ulangi.");
  //   } else {
  //     registeredAccounts[email] = password;

  //     // Simpan data pengguna terdaftar ke LocalStorage
  //     localStorage.setItem("registeredAccounts", JSON.stringify(registeredAccounts));

  //     alert("Pendaftaran berhasil!");
  //     window.location.href = "login.html";
  //   }
  // });
});

  
  
  
// menu
var tombolMenu = $(" .tombol-menu");
var menu = $("nav .menu ul");

function klikMenu(){
    tombolMenu.click(function(){
        menu.toggle();
    });
    menu.click(function(){
        menu.toggle();
    });
}

$(document).ready(function(){
    var width =$(window).width();
   if(width <990){
    klikMenu();
   }
})
// cek lebar
$(window).resize (function(){
    var width = $(window).width();
    if (width >989 ){
        menu.css("display", "block");
        //display : block
    } else{
        menu.css("display", "none");
    }
    klikMenu();
})



   