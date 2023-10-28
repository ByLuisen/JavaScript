import * as auth from './auth.js';

document.getElementById('login').addEventListener('click', auth.login)
document.getElementById('register').addEventListener('click', auth.register)

//-------------------------------------EVENTOS PAGINA DE LOGIN -----------------------------------------

document.getElementById("loginBtn").addEventListener("click", function () {
    document.getElementById("loginInfo").innerHTML = ""
    let email = document.getElementById("loginEmail").value
    let pass = document.getElementById("loginPassword").value
    let campo1 = auth.validarLoginEmail(email)
    let campo2 = auth.validarLoginPassword(pass)
    if (campo1 && campo2) {
        auth.validarUsuario(email, pass)
    }
})

//-------------------------------------EVENTOS PAGINA DE REGISTRO -----------------------------------------

//verifico el nombre de registro
document.getElementById("signUpName").addEventListener("blur", auth.validarNombre)

//verifico los apellidos de registro
document.getElementById("signUpLastN").addEventListener("blur", auth.validarApellidos)

//verifico el email de registro
document.getElementById("signUpEmail").addEventListener("blur", auth.validarSignUpEmail)

//verifico la contraseña de registro
document.getElementById("signUpPassword").addEventListener("blur", auth.validarContraseña)

//verifico si las contraseñas coinciden de registro
document.getElementById("signUpRPassword").addEventListener("blur", auth.validarContraseñaRepe)

//verifico el DNI de registro
document.getElementById("signUpDNI").addEventListener("blur", auth.validarDni)

document.getElementById("signUpBtn").addEventListener("click", function () {
    document.getElementById("signUpInfo").innerHTML = ""
    let campo1 = auth.validarNombre()
    let campo2 = auth.validarApellidos()
    let campo3 = auth.validarSignUpEmail()
    let campo4 = auth.validarContraseña()
    let campo5 = auth.validarContraseñaRepe()
    let campo6 = auth.validarDni()
    if (campo1 && campo2 && campo3 && campo4 && campo5 && campo6) {
        let email = document.getElementById("signUpEmail").value
        let pass = document.getElementById("signUpPassword").value
        auth.usuaris.push(email)
        auth.contrasenyes.push(pass)
        document.getElementById("signUpInfo").innerHTML = "USUARIO REGISTRADO CORRECTAMENTE"
    }
})