let usuaris = ["usu01", "usu02", "usu03"]
let contrasenyes = ["pass01", "pass02", "pass03"]

//-------------------------------------- ANIMACIONES -----------------------------------------

let loginForm = document.getElementById("signin");
var registerForm = document.getElementById("signup");
var indicador = document.getElementById("indicador");

function login() {
    registerForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    indicador.style.transform = "translateX(0px)";
}

function register() {
    registerForm.style.transform = "translateX(-500px)";
    loginForm.style.transform = "translateX(-500px)";
    indicador.style.transform = "translateX(218px)";
}

//--------------------------------------FUNCIONES LOGIN-----------------------------------------
function validarUsuario(email, pass) {
    if (usuaris.includes(email)) {
        document.getElementById("errorLoginEmail").innerHTML = ""
        document.getElementById("loginEmail").style.borderColor = "grey"
        let posicio = usuaris.indexOf(email)
        if (contrasenyes[posicio] == pass) {
            document.getElementById("loginInfo").innerHTML = "USUARIO CORRECTO"
            document.getElementById("errorLoginPassword").innerHTML = ""
            document.getElementById("loginPassword").style.borderColor = "grey"
        } else {
            document.getElementById("errorLoginEmail").innerHTML = "Credenciales incorrectas"
            document.getElementById("loginEmail").style.borderColor = "red"
            document.getElementById("errorLoginPassword").innerHTML = "Credenciales incorrectas"
            document.getElementById("loginPassword").style.borderColor = "red"
        }
    } else {
        document.getElementById("errorLoginEmail").innerHTML = "Credenciales incorrectas"
        document.getElementById("loginEmail").style.borderColor = "red"
        document.getElementById("errorLoginPassword").innerHTML = "Credenciales incorrectas"
        document.getElementById("loginPassword").style.borderColor = "red"
    }
}

function validarLoginEmail(email) {
    let flag = false
    if (email == "") {
        document.getElementById("errorLoginEmail").innerHTML = "Debes completar este campo"
        document.getElementById("loginEmail").style.borderColor = "red"
        flag = false
    } else {
        document.getElementById("errorLoginEmail").innerHTML = ""
        document.getElementById("loginEmail").style.borderColor = "grey"
        flag = true
    }
    return flag
}

function validarLoginPassword(pass) {
    let flag = false
    if (pass == "") {
        document.getElementById("errorLoginPassword").innerHTML = "Debes completar este campo"
        document.getElementById("loginPassword").style.borderColor = "red"
        flag = false
    } else {
        document.getElementById("errorLoginPassword").innerHTML = ""
        document.getElementById("loginPassword").style.borderColor = "grey"
        flag = true
    }
    return flag
}

//--------------------------------------FUNCIONES REGISTRO-----------------------------------------

function validarNombre() {
    let nombre = document.getElementById("signUpName").value
    let patron = /^[\p{L}' ]+$/u;
    let flag = false
    if (nombre == '') {
        document.getElementById("errorName").innerHTML = "Debes completar este campo"
        document.getElementById("signUpName").style.borderColor = "red"
        flag = false;
    } else if (!patron.test(nombre)) {
        document.getElementById("errorName").innerHTML = "Los datos introducidos no son correctos"
        document.getElementById("signUpName").style.borderColor = "red"
        flag = false;
    } else {
        document.getElementById("signUpName").value = nombre.trim()
        document.getElementById("errorName").innerHTML = ""
        document.getElementById("signUpName").style.borderColor = "grey"
        flag = true
    }
    return flag
}

function validarApellidos() {
    let apellidos = document.getElementById("signUpLastN").value
    let patron = /^[\p{L}' ]+$/u;
    let flag = false
    if (apellidos == '') {
        document.getElementById("errorApellidos").innerHTML = "Debes completar este campo"
        document.getElementById("signUpLastN").style.borderColor = "red"
        flag = false;
    } else if (!patron.test(apellidos)) {
        document.getElementById("errorApellidos").innerHTML = "Los datos introducidos no son correctos"
        document.getElementById("signUpLastN").style.borderColor = "red"
        flag = false;
    } else {
        document.getElementById("signUpLastN").value = apellidos.trim()
        document.getElementById("errorApellidos").innerHTML = ""
        document.getElementById("signUpLastN").style.borderColor = "grey"
        flag = true
    }
    return flag
}

function validarSignUpEmail() {
    let email = document.getElementById("signUpEmail").value
    let patron = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
    let flag = false
    if (email == '') {
        document.getElementById("errorEmail").innerHTML = "Debes completar este campo"
        document.getElementById("signUpEmail").style.borderColor = "red"
        flag = false;
    } else if (!patron.test(email)) {
        document.getElementById("errorEmail").innerHTML = "Los datos introducidos no son correctos"
        document.getElementById("signUpEmail").style.borderColor = "red"
        flag = false;
    } else {
        document.getElementById("errorEmail").innerHTML = ""
        document.getElementById("signUpEmail").style.borderColor = "grey"
        flag = true
    }
    return flag
}

function validarContraseña() {
    let password = document.getElementById("signUpPassword").value
    let patron = /^[a-z0-9]+$/i
    let flag = false
    if (password == '') {
        document.getElementById("errorPass").innerHTML = "Debes completar este campo"
        document.getElementById("signUpPassword").style.borderColor = "red"
        flag = false;
    } else if (!patron.test(password) || password.length < 5) {
        document.getElementById("errorPass").innerHTML = "La contraseña introducida no es correcta"
        document.getElementById("signUpPassword").style.borderColor = "red"
        flag = false;
    } else {
        document.getElementById("errorPass").innerHTML = ""
        document.getElementById("signUpPassword").style.borderColor = "grey"
        flag = true
    }
    return flag
}

function validarContraseñaRepe() {
    let rPassword = document.getElementById("signUpRPassword").value
    let password = document.getElementById("signUpPassword").value
    let flag = false
    if (rPassword == '') {
        document.getElementById("errorRPass").innerHTML = "Debes completar este campo"
        document.getElementById("signUpRPassword").style.borderColor = "red"
        flag = false;
    } else if (rPassword != password) {
        document.getElementById("errorRPass").innerHTML = "La contraseña introducida no coincide"
        document.getElementById("signUpRPassword").style.borderColor = "red"
        flag = false;
    } else {
        document.getElementById("errorRPass").innerHTML = ""
        document.getElementById("signUpRPassword").style.borderColor = "grey"
        flag = true
    }
    return flag
}

function validarDni() {
    let dni = document.getElementById("signUpDNI").value
    let patron = /^\d{8}[a-zA-Z]$/;
    let flag = false
    if (dni == '') {
        document.getElementById("errorDNI").innerHTML = "Debes completar este campo"
        document.getElementById("signUpDNI").style.borderColor = "red"
        flag = false;
    } else if (!patron.test(dni)) {
        document.getElementById("errorDNI").innerHTML = "El DNI introducido no és correcto"
        document.getElementById("signUpDNI").style.borderColor = "red"
        flag = false;
    } else if (patron.test(dni)) {
        if (!verificaDNI()) {
            document.getElementById("errorDNI").innerHTML = "El DNI introducido no es real"
            document.getElementById("signUpDNI").style.borderColor = "red"
            flag = false;
        } else {
            document.getElementById("errorDNI").innerHTML = ""
            document.getElementById("signUpDNI").style.borderColor = "grey"
            flag = true
        }
    }
    return flag
}

function verificaDNI() {
    let dni = document.getElementById("signUpDNI").value
    let lletra = dni[8]
    let num = dni.slice(0, 8)
    let flag = false
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE"

    let residuo = num % 23
    let letraBuena = letras[residuo]

    if (letraBuena == lletra.toUpperCase()) {
        flag = true
    }
    return flag;
}