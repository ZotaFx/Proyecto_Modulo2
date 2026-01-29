function loguear() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if(email == "ignacio@alke.com" && password == "123456"){
        window.location.href = "/iniciales/menu.html";
    }
    else{
        alert("Credenciales incorrectas");
    }
}