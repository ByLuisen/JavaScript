'use strict'

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
    let cvalue = getCookie("usuari");
    if (cvalue == "") {
        const cookieOverlay = document.getElementById("cookie-overlay");
        const cookiePopup = document.getElementById("cookie-popup");
        const aceptarCookieBtn = document.getElementById("aceptarCookie");
        const rechazarCookieBtn = document.getElementById("rechazarCookie");
        const minimaCookieBtn = document.getElementById("minimaCookie");

        // Mostrar el popup de cookies y el fondo oscurecido al cargar la página
        cookieOverlay.style.display = "block";
        cookiePopup.style.display = "block";

        // Manejar el clic en el botón "Aceptar"
        aceptarCookieBtn.addEventListener("click", function () {
            cookieOverlay.style.display = "none";
            cookiePopup.style.display = "none";
            setCookie('usuari', 'aceptada la cookie', 365);
            setCookie('visitas', 1, 365);
        });

        // Manejar el clic en el botón "Aceptar"
        rechazarCookieBtn.addEventListener("click", function () {
            cookieOverlay.style.display = "none";
            cookiePopup.style.display = "none";
        });

        // Manejar el clic en el botón "Aceptar"
        minimaCookieBtn.addEventListener("click", function () {
            cookieOverlay.style.display = "none";
            cookiePopup.style.display = "none";
            setCookie('usuari', 'aceptada la cookie', 365);
        });
    }
}

function contadorVisitas(){
    let cvalue = getCookie("visitas");
    if (cvalue != "") {
        cvalue++
        setCookie('visitas', cvalue, 365);
    }
}