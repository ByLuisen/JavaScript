//localstorage i session storage
localStorage.setItem("test", 1)
localStorage.setItem("comptador", 23)
sessionStorage.setItem("name", "Anna")
console.log(localStorage.getItem("test"))
console.log(sessionStorage.getItem("name"))

//tot el de localStorage serveix per a sessioStorage
localStorage.test = 2//equival a localStorage.setItem("test", 2)
console.log(localStorage.test)// equivale a localStorage.setItem("test")

//esborrar una locaStorage en particular
//localStorage.removeItem("test")
//delete localStorage.test// equival a localStorage.removeItem("test")
//esborra totes les localStorage
// localStorage.clear()

//això no està ben fet!!!!!!!!!!!!!!!!!!!!!!!!!!
localStorage.user = { name: "Jhon", dni: "12345678Z" }
alert(localStorage.user)

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("canvia").addEventListener("click", function () {
        // Declaramos las variables de los elementos radio para saber si estan checked
        let fonsVerd = document.getElementById("verd")
        let fonsGroc = document.getElementById("groc")
        let lletraBlanc = document.getElementById("blanc")
        let lletraRosa = document.getElementById("rosa")

        let colorFons = ""
        let colorLletra = ""

        // Si el radio verd esta checked 
        if (fonsVerd.checked) {
            colorFons = fonsVerd.value
            // Si el radio groc esta checked 
        } else if (fonsGroc.checked) {
            colorFons = fonsGroc.value
        }

        // Si el radio blanc esta checked 
        if (lletraBlanc.checked) {
            colorLletra = lletraBlanc.value
            // Si el radio rosa esta checked
        } else if (lletraRosa.checked) {
            colorLletra = lletraRosa.value
        }

        // Establecemos la cookie de color fons
        document.cookie = "Color fons = " + colorFons
        // Establecemos la cookie de color lletra
        document.cookie = "Color lletra = " + colorLletra
        // Cambiamos el color del fondo
        document.body.style.backgroundColor = getCookie("Color fons")
        // Cambiamos el color de el texto
        document.body.style.color = getCookie("Color lletra")
    })
})

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
