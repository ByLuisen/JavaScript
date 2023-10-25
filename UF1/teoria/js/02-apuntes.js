// //javascript respeta lo que hubiera
// document.getElementById("hello").innerHTML = "Hola a tothom!"//inserint texte dins del id
// let valors = document.getElementsByTagName("h2")//és un array
// console.log(valors[1].innerHTML)

// let classe = document.getElementsByClassName("intro")
// console.log(classe)

// console.log(document.querySelector("#hello").innerHTML)//accedo al id
// console.log(document.querySelector("h2.intro").innerHTML)//accedo a la clase
// console.log(document.querySelectorAll(".intro"))//accedo a todos los tags con clase intro

// //acceso a los atributos
// console.log(document.getElementById("link").href)
// //cambio de atributo
// document.getElementById("link").href = "http://www.proven.cat"

// //Manera alternativa de incrustar una página
// document.write("<h1>Hello hello!!!!</h1>")

// //recojo un valor de un formulario

// //esto me dice cadena vacía porque cuando cargo no hay nada denro de la caja
// /* let myname = document.getElementById("nom").innerHTML
//     if (myname == "David") {
//         alert("Hola David")
//     } */

// //asocio una condicion para hacer la recogida y comparacion

// //VALIDO:
// //document.getElementById("clicando").click

// /* document.getElementById("myBtn").addEventListener("click", function () {
//     alert(document.getElementById("myText").value)
// }) */

// //equivalente
// /* document.getElementById("myBtn").addEventListener("click", () => {
//     alert(document.getElementById("myText").value)
// }) */
// document.getElementById("myBtn").addEventListener("click", myFunction);

// function myFunction() {
//     document.getElementById("myBloc").style.display = "none";
//     //alert(document.getElementById("myText").value);
// }

// //esta será la manera habitual de asociar evento

let cadena = "We will, we will rock you"
let patron = /la/i

console.log(cadena.match(/we/ig))// el  match es para buscar
console.log(patron.test(cadena))// el test solo te dice true o false

if (patron.test(cadena)) {
    console.log("Patron encontrado")
} else {
    console.log("Patron No encontrado")
}
console.log(cadena.replace(/we/ig, "You"))