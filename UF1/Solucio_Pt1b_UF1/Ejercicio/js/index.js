/* EJERCICIO 1*/
// VARIABLES
let cronometro;
let minutos;
let segundos;

let iniciarCronometro = document.getElementById("btnIniciar");
let pararCronometro = document.getElementById("btnParar");
let mostrarCronometro = document.getElementById("crono");

// Evento al clicar el Boton Iniciar Crono
document.getElementById("btnIniciar").addEventListener("click", function () {
    iniciarCrono();
});

// Evento para clicar el Boton Detener Crono
document.getElementById("btnParar").addEventListener("click", function () {
    detenerCrono();
    mostrarFecha();
})


// Funcion para iniciar el crono
function iniciarCrono() {

    //fiquem tot a 0 (si no es fa pararia però en iniciar de nou continuaria per on ho hem deixat)
    segundos = 0;
    minutos = 0;
    cronometro = setInterval(function () { //cada 1 segon recarrega la funció
        segundos++;
        //per tenir l'aspecte minuts:hores
        if (segundos == 60) {
            segundos = 0;
            minutos++;
            if (minutos < 10) {
                minutos = "0" + minutos;
            }
        } else if (segundos < 10) {
            segundos = '0' + segundos;//per al format de la data, queda millor
        }

        mostrarCronometro.innerHTML = minutos + ":" + segundos;

        //Una altra manera més curta:
        // let reiniciarTiempo = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
        // mostrarCronometro.innerHTML =reiniciarTiempo;



    }, 1000);//cada 1000 milisegons és 1 segon

}

// Funcion para detener el crono
function detenerCrono() {
    clearInterval(cronometro);

}

// Funcion para mostrar fecha
function mostrarFecha() {

    let diaSetmana = ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"];
    let mes = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"];
    var fechaActual = new Date();
    var fechaFormateada = diaSetmana[fechaActual.getDay()] + ", dia " + fechaActual.getDate() + " de/d' " + mes[fechaActual.getMonth()] + " del " + fechaActual.getFullYear() + ", " + fechaActual.getHours() + ":" + fechaActual.getMinutes() + ":" + fechaActual.getSeconds();
    document.getElementById("fecha").innerHTML = fechaFormateada;
    // var opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    // fechaFormateada = fechaActual.toLocaleDateString('es-ES', opciones);//només per al castellà!!!! Es demanava en català


}




/*------------------------------------------------------------------------------------*/
/*EJERCICIO 2*/
let exercici2 = []; //al principi de tot, quan carrega la pàgina, aquest array està buit

// Evento para validar el Input donde se introducen los valores
document.getElementById("introducirValores").addEventListener("blur", function () {

    // VARIABLES
    let valores = document.getElementById("introducirValores").value;
    let opcionesSelect = document.getElementById("opciones").value; //agafo id del select

    //comprovacions
    console.log(valores);
    console.log(opcionesSelect);


    // Validaciones
    if (valores >= -99 && valores <= 99) { //si miro valores.length<3 els negatius de 2 xifres donarien que són de 3 xifres
        document.getElementById("error").innerHTML = "Tiene que tener mas de 3 valores";
        document.getElementById("introducirValores").value = "";
    } else if (isNaN(valores)) {
        document.getElementById("error").innerHTML = "Solamente tiene que tener números";
        document.getElementById("introducirValores").value = "";
    } else {
        document.getElementById("error").innerHTML = "";

        if (opcionesSelect == "inicio") {
            exercici2.unshift(valores);
        } else {
            exercici2.push(valores);
        }
    }

    // Mostrem l'Array de  dues maneres
    console.log(exercici2);
    document.getElementById("valoresArray").innerHTML = exercici2;

})


/*------------------------------------------------------------------------------------*/
/*EJERCICIO 3*/

document.getElementById("btnEdad").addEventListener("click", function () {

    let nombre = document.getElementById("nombre").value;
    let fecha = document.getElementById("nacimiento").value;
    let patron = /^[ a-zñáàéèíòóú]+$/i;
    let fechaActual = new Date();

    console.log(nombre);
    console.log(fecha);


    //aquí podem detectar errors de data

    fechaR = new Date(fecha);


    //validem nombre
    console.log(nombre.length)
    if (nombre.length < 3 || nombre.length > 20) {
        document.getElementById("errorNom").innerHTML = "Ha d'haver entre 3 i 20 caràcters";
        nombre = "";
    } else if (!patron.test(nombre)) {

        document.getElementById("errorNom").innerHTML = "El nom només ha de contenir lletres i espais en blanc";
        nombre = "";
    } else {
        document.getElementById("errorNom").innerHTML = "";
    }

    //validem fecha
    if (fecha == "") {
        document.getElementById("errorFec").innerHTML += " Data buida o data incorrecta";//aqui podem detectar errors de data
        fecha = "";
    } else if (fechaR > fechaActual) { //comparar dates
        document.getElementById("errorFec").innerHTML += "Data incorrecta, no pot ser del futur!";
        fecha = "";
    } else if (fechaR.getFullYear() + 150 < fechaActual.getFullYear()) { //mirar si la data és del passat i >150 anys
        document.getElementById("errorFec").innerHTML += "Data incorrecta, no pot ser de fa més de 150 anys!";
        fecha = "";
    } else {
        document.getElementById("errorFec").innerHTML = "";
        fecha = "";
    }


    var edad = fechaActual.getFullYear() - fechaR.getFullYear();

    if (fechaActual.getMonth() < fechaR.getMonth() || (fechaActual.getMonth() === fechaR.getMonth() && fechaActual.getDate() < fechaR.getDate())) {
        edad--;
    }

    document.getElementById("años").innerHTML = "Tu edad es: " + edad + " años";
});

function existeFecha(fecha) {
    var fechaf = fecha.split("-");
    var y = fechaf[0];
    var m = fechaf[1];
    var d = fechaf[2];
    return m > 0 && m < 13 && y > 0 && y < 150 && d > 0 && d <= (new Date(y, m, 0)).getDate();
}


/*------------------------------------------------------------------------------------*/
/* EJERCICIO 4 */

// VARIABLES
const textoarea = document.getElementById("texto");
const contadorVocales = document.getElementById("contadorVocales");
const longitudTexto = document.getElementById("longitudTexto");
const contadorPalabras = document.getElementById("contadorPalabras");
textoarea.value = "";//quan carreguem el textarea estarà net

textoarea.addEventListener('keyup', actualizarContenedores); //fem servir l'esdeveniment keyup o input

// Funcion para alctualizar los Contadores
function actualizarContenedores() {

    let texto = textoarea.value;
    if (/ñ/i.test(texto)) {
        texto = texto.replace(/ñ/ig, "");
        document.getElementById("texto").value = texto;
    }

    const vocales = contarVocales(texto);
    const palabras = contarPalabras(texto);
    const caracteres = texto.length;

    contadorVocales.innerHTML = vocales;
    longitudTexto.innerHTML = caracteres;
    contadorPalabras.innerHTML = palabras;

}

// Funcion para contar las Vocales
function contarVocales(texto) {
    //match retorna el que troba, si fiquem g ho farà per a totes les vegades que ho trobi. En aquest cas 
    //match retorna un array
    const totalVocales = texto.match(/[aeiouàáèéíòóú]/gi); //hem de ficar totes les vocals en català

    return totalVocales ? totalVocales.length : 0;
}

// Funcion para contar las Palabras
function contarPalabras(texto) {

    let totalParaules = texto.match(/[ ]/g);

    return totalParaules ? totalParaules.length : 0;


}

/*------------------------------------------------------------------------------------*/