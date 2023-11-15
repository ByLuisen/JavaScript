document.getElementById('login').addEventListener('click', login)
document.getElementById('register').addEventListener('click', register)

//-------------------------------------EVENTOS PAGINA DE LOGIN -----------------------------------------

document.getElementById("loginBtn").addEventListener("click", function () {
    let email = document.getElementById("loginEmail").value
    let pass = document.getElementById("loginPassword").value
    let campo1 = validarLoginEmail(email)
    let campo2 = validarLoginPassword(pass)
    if (campo1 && campo2) {
        let user = new User(email.trim(), pass.trim())
        validarUsuario(user.toLoginObject())
            .then(success => {
                sessionStorage.setItem('loged', true)
                credencialesCorrectas()
            })
            .catch(error => {
                // Manejo del error
                credencialesIncorrectas(error)
                console.log(error);
            }); 
    }
    })

//-------------------------------------EVENTOS PAGINA DE REGISTRO -----------------------------------------

//verifico el nombre de registro
document.getElementById("signUpName").addEventListener("blur", validarNombre)

//verifico los apellidos de registro
document.getElementById("signUpLastN").addEventListener("blur", validarApellidos)

//verifico el email de registro
document.getElementById("signUpEmail").addEventListener("blur", validarSignUpEmail)

//verifico la contraseña de registro
document.getElementById("signUpPassword").addEventListener("blur", validarContraseña)

//verifico si las contraseñas coinciden de registro
document.getElementById("signUpRPassword").addEventListener("blur", validarContraseñaRepe)

//verifico el DNI de registro
document.getElementById("signUpDNI").addEventListener("blur", validarDni)

document.getElementById("signUpBtn").addEventListener("click", function () {
    document.getElementById("signUpInfo").innerHTML = ""
    let campo1 = validarNombre()
    let campo2 = validarApellidos()
    let campo3 = validarSignUpEmail()
    let campo4 = validarContraseña()
    let campo5 = validarContraseñaRepe()
    let campo6 = validarDni()
    if (campo1 && campo2 && campo3 && campo4 && campo5 && campo6) {
        let email = document.getElementById("signUpEmail").value
        let pass = document.getElementById("signUpPassword").value
        usuaris.push(email)
        contrasenyes.push(pass)
        document.getElementById("signUpInfo").innerHTML = "USUARIO REGISTRADO CORRECTAMENTE"
    }
})