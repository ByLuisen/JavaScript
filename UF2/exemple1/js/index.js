// cuando cargue la página
document.addEventListener("DOMContentLoaded", function () {

    //cookies navegador
    //crear una cookie de nom cookie y de contingut Marga1989
    //el temps de vida si és per max-age es calcula en segons

    // document.cookie="cookie=Marga1989; max-age=86400";//temps en GMT
    //expires: anem a crear la data
    // const d = new Date();//el dia d'avui en milisegons
    // d.setTime(d.getTime() + (3 * 24 * 60 * 60 * 1000));//afegim 3 dies
    // console.log(d.toUTCString())
    // document.cookie = "cookie=Marga1989; expires=" + d.toUTCString()

    //expires pero ficant la data directament

    document.cookie = "cookie=Marga1989; expires=Thu, 18 Dec 2023 12:00:00 UTC";

    //esborrem la cookie cookie
    // document.cookie = "cookie=; expires=Thu, 18 Dec 1970 12:00:00 UTC";

    //crear 3 cookies amb temps de vida el que duri la sessió 
    document.cookie = "color = green";
    document.cookie = "lletra = gran"
    document.cookie = "fons = clar"

    console.log(document.cookie)//imprimeixo totes les cookies

    //manipular la cookie lletra, com ho faig
    //1.- la tornes a crear
    document.cookie = "lletra = normal; max-age = 3600"

    //2.- vull saber el valor concre actual d'una cookie-->
    //has de fer servir una funció
    console.log(getCookie("lletra"))

    //3.- vull saber cuantes vegades una persona visita una página
    checkCookie("comptador")
});

//Función para comprobar una cookie 
function checkCookie(cookieName) {
    let cookie = getCookie(cookieName);
    if (cookie != "" || isNaN(cookie)) {
        let num = parseInt(cookie)
        num++
        setCookie(cookieName, num.toString(), 365)
    } else {
        cookie = prompt("Please enter the name of cookie:", "");
        if (cookie != "" && cookie != null) {
            setCookie(cookie, 1, 365);
        }
    }
}

//Función para configurar una cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//Función para obtener una cookie
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
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