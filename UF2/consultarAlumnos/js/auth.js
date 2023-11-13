const usuaris = ["usu01"]
const contrasenyes = ["pass01"]
const cursos = ['daw', 'dam', 'asix']
const select = document.getElementById("cursos")

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
function validarUsuario(email, pass) {
    let flag = false
    // credencialCorrecta('Email')
    // credencialCorrecta('Password')
    if (usuaris.includes(email)) {
        credencialCorrecta('Email')
        let posicio = usuaris.indexOf(email)
        if (contrasenyes[posicio] == pass) {
            localStorage.setItem('loged', true);
            credencialCorrecta('Password')
            flag = true
        } else {
            credencialesIncorrectas()
        }
    } else {
        credencialesIncorrectas()
    }
    return flag
}

function credencialCorrecta(id) {
    document.getElementById(`errorLogin${id}`).innerHTML = ""
    document.getElementById(`login${id}`).style.borderColor = "grey"
}

function credencialesIncorrectas() {
    document.getElementById("errorLoginEmail").innerHTML = "Credenciales incorrectas"
    document.getElementById("loginEmail").style.borderColor = "red"
    document.getElementById("errorLoginPassword").innerHTML = "Credenciales incorrectas"
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
    for (let i = 0; i < cursos.length; i++) {
        let option = document.createElement("option");
        option.value = cursos[i]
        option.innerHTML = cursos[i];
        select.appendChild(option);
    }
}

function userIsLoged() {
    if (localStorage.getItem('loged')) {
        document.getElementById('form').classList.replace('d-none', 'd-block')
    } else {
        document.getElementById('signin').classList.replace('d-none', 'd-block')
    }
}

