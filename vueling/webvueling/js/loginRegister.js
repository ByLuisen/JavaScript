'use strict'
// Al cargar la pagina
document.addEventListener("DOMContentLoaded", function () {
    localStorage.removeItem('loged')
    existeCookie()
    contadorVisitas()
});

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
                localStorage.setItem('loged', true)
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
        let nombre = document.getElementById("signUpName").value
        let apellidos = document.getElementById("signUpLastN").value
        let dni = document.getElementById("signUpDNI").value
        let newUser = new User(email.trim(), pass.trim(), nombre.trim(), apellidos.trim(), dni.trim())

        /** 
         * Con XMLHttpRequest
         */
        const xhr = new XMLHttpRequest();
        const url = 'http://localhost:3000/vueling/register';

        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    document.getElementById("signUpInfo").innerHTML = "USUARIO REGISTRADO CORRECTAMENTE"
                    const json = JSON.parse(xhr.responseText);
                    console.log(json);
                    if (!json.error) {
                        console.log(json.message);
                    }
                } else if (xhr.status === 409) {
                    console.error('Conflicto: El usuario ya existe en la base de datos');
                } else {
                    console.error('Error en la solicitud: ' + xhr.statusText);
                }
            }
        };

        const requestBody = JSON.stringify(newUser.toRegisterObject());
        xhr.send(requestBody);

        /**
         * Con fecth
         */
        // fetch('http://localhost:3000/vueling/register', {
        //     method: "POST",
        //     body: JSON.stringify(newUser.toRegisterObject()),
        //     headers: { "Content-type": "application/json; charset=UTF-8" }
        // })
        //     .then(response => {
        //         if (response.ok) {
        //             document.getElementById("signUpInfo").innerHTML = "USUARIO REGISTRADO CORRECTAMENTE"
        //             return response.json();
        //         } else if (response.status === 409) {
        //             throw new Error('Conflicto: El usuario ya existe en la base de datos');
        //         } else {
        //             throw new Error('Error en la solicitud: ' + response.statusText);
        //         }
        //     })
        //     .then(json => {
        //         console.log(json);
        //         if (!json.error) {
        //             console.log(json.message)
        //         }
        //     })
        //     .catch(handleGeneralError);
    }
})