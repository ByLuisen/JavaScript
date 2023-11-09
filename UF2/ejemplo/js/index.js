// //primera manera de conectarme a api-rest
// let xhr = new XMLHttpRequest();

// //abro la conexion hacia el servidor
// //declaro el recurso y el metodo de acceso (POST)
// xhr.open('POST', 'http://localhost:3000/api/login');

// //envio la solicitud a la red
// xhr.send();

// // esto se llamará después de que la respuesta se reciba
// xhr.onload = function () {
//     if (xhr.status != 200) { // hay error
//         alert(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado
//     } else { // no hay error
//         alert(`Hecho, obtenidos ${xhr.response.length} bytes`); // Respuesta del servidor
//     }
// };

// xhr.onprogress = function (event) {
//     if (event.lengthComputable) {
//         alert(`Recibidos ${event.loaded} de ${event.total} bytes`);
//     } else {
//         alert(`Recibidos ${event.loaded} bytes`); // sin Content-Length
//     }

// };

// xhr.onerror = function () {
//     alert("Solicitud fallida");
// };

// aixó es un objecte JS
let data = {
    username: "daw2",
    userpass: "2021 "
};

// funció per a quan hi ha èxit
function exit() {

    var dades = JSON.parse(this.responseText);// recollim les dades

    if (dades.error) {
        document.getElementById("message").innerHTML = dades.message;
    } else {// si no hi ha errors
        document.getElementById("message").innerHTML = dades.message + "<br>"
        //imprimir els usuaris

        //document.getElementById("message").innerHTML = dades.resultats
        for (let index = 0; index < dades.resultats.length; index++) {
            document.getElementById("message").innerHTML += dades.resultats[index].username + "<br>"

        }
    }
}

// funció per a quan hi ha error
function error() {

    console.log('Tenim errors: ', err);

}

var xhr = new XMLHttpRequest();//invocar nueva instancia de XMLHttpRequest

xhr.onload = exit; //cridar a la funció d'èxit quan tot va bé

xhr.onerror = error; //cridar a la funció d'error quan hi ha fallida

xhr.open('POST', 'http://localhost:3000/api/login'); //obrim la sol·licitud

xhr.send(JSON.stringify(data)); //enviem la sol·licitud, no envio res

// exemple básic de fetch

/**
 * Primer ejemplo
 */
// // Solicitud GET (Request).
// fetch('https://api.github.com/users/manishmshiva')
//     // Exito
//     .then(response => response.json())  // convertir a json
//     .then(json => console.log(json))    //imprimir los datos en la consola
//     .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

/**
 * Segundo ejemplo
 */
// fetch('https://api.github.com/users/manishmshiva', {
//     method: "GET",
//     headers: { "Content-type": "application/json;charset=UTF-8" }
// })
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch (err => console.log(err));

/**
 * Tercer ejemplo
 */
// datos mandados con la solicutud POST
// let _datos = {
//     titulo: "foo",
//     principal: "bar",
//     Id: 1
// }

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST",
//     body: JSON.stringify(_datos),
//     headers: { "Content-type": "application/json; charset=UTF-8" }
// })
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err));