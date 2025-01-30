
function passshows() {  
    const passimg = document.getElementById('passimg');
    const password = document.getElementById('password');
  
    if (password.type === 'password') {
        password.type = 'text';  
        passimg.src = "assets/img/password-show.svg";  
    } else {
        password.type = 'password'; 
        passimg.src = "assets/img/password-hide.svg";  
    }
  }