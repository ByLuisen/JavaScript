//primera manera de conectarme a api-rest
let xhr = new XMLHttpRequest();

//abro la conexion hacia el servidor
//declaro el recurso y el metodo de acceso (POST)
xhr.open('POST', 'http://localhost:3000/api/login');

//envio la solicitud a la red
xhr.send();

// esto se llamará después de que la respuesta se reciba
xhr.onload = function () {
    if (xhr.status != 200) { // hay error
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado
    } else { // no hay error
        alert(`Hecho, obtenidos ${xhr.response.length} bytes`); // Respuesta del servidor
    }
};

xhr.onprogress = function (event) {
    if (event.lengthComputable) {
        alert(`Recibidos ${event.loaded} de ${event.total} bytes`);
    } else {
        alert(`Recibidos ${event.loaded} bytes`); // sin Content-Length
    }

};

xhr.onerror = function () {
    alert("Solicitud fallida");
};