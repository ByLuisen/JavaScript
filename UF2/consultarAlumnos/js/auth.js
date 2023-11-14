'use strict'

const errorLogin = document.getElementById("errorLogin")

function fechaFormateada(fechaActual) {
    return fechaActual.getDate() + "/" + (fechaActual.getMonth() + 1) + "/" + fechaActual.getFullYear() + ", " +
        fechaActual.getHours() + ":" + fechaActual.getMinutes() + ":" + fechaActual.getSeconds();
}

// Funcion para mostrar fecha
function mostrarFecha() {
    var fechaActual = new Date();
    document.getElementById("fechaActual").innerHTML = fechaFormateada(fechaActual);
    setInterval(function () {
        fechaActual = new Date();
        document.getElementById("fechaActual").innerHTML = fechaFormateada(fechaActual);
    }, 1000)
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function existeCookie() {
    let cvalue = getCookie("cookie");
    if (cvalue == "") {
        const cookieOverlay = document.getElementById("cookie-overlay");
        const cookiePopup = document.getElementById("cookie-popup");
        const aceptarCookieBtn = document.getElementById("aceptarCookie");

        // Mostrar el popup de cookies y el fondo oscurecido al cargar la página
        cookieOverlay.style.display = "block";
        cookiePopup.style.display = "block";

        // Manejar el clic en el botón "Aceptar"
        aceptarCookieBtn.addEventListener("click", function () {
            cookieOverlay.style.display = "none";
            cookiePopup.style.display = "none";
            setCookie('cookie', 'cookie aceptada', 7);
        });
    }
}

//--------------------------------------FUNCIONES LOGIN-----------------------------------------
function userIsLoged() {
    if (localStorage.getItem('loged')) {
        document.getElementById('form').classList.replace('d-none', 'd-block')
        inicializarSelects()
    } else {
        document.getElementById('signin').classList.replace('d-none', 'd-block')
    }
}

function validarUsuario(email, pass) {
    const data = {
        username: email,
        userpass: pass
    };

    return fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else if (response.status === 401) {
                throw new Error('Nombre de usuario o contraseña incorrectos');
            } else {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
        })
        .then(json => {
            if (json.error) {
                throw new Error(json.error);
            }
            return json.success;
        })
        .catch(error => {
            console.error('Error al validar usuario:', error.message);
            throw new Error(error.message);
        });
}

function credencialesIncorrectas(error) {
    errorLogin.classList.replace('d-none', 'd-block')
    errorLogin.innerHTML = error
    document.getElementById("loginEmail").style.borderColor = "red"
    document.getElementById("loginPassword").style.borderColor = "red"
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

function inicializarSelects() {
    // Ejercicio 1: Realizar la solicitud al backend
    fetch('http://localhost:3000/api/cursos', {
        method: "POST"
        // Agrega aquí cualquier otra configuración necesaria para tu solicitud
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                handleServerError(response);
            }
        })
        .then(json => {
            guardarEnSelect(json)
        })
        .catch(error => {
            console.error('Error general:', error.message)
        });
}

// Función para imprimir los datos en un elemento "select"
const guardarEnSelect = (json) => {
    // Verificar si el elemento "select" con id "miSelect" existe en el documento
    const selectElement = document.getElementById("cursos");

    if (selectElement) {
        // Iterar sobre los objetos en el array
        json.resultats.forEach((obj) => {
            // Crear una opción para cada objeto y agregarla al "select"
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    let option = document.createElement("option");
                    option.value = obj[key];
                    option.innerHTML = obj[key]
                    selectElement.appendChild(option);
                }
            }
        });
    } else {
        console.log('El elemento "select" con id "miSelect" no se encontró en el documento.');
    }
};

