const messageDiv = document.getElementById('message');
// Ejercicio 1
fetch('http://localhost:3000/api/login')
    // Éxito
    .then(response => {
        if (response.status === 200) {
            return response.json();
        } else if (response.status === 400) {
            throw new Error('Conflicto: Hi ha un error amb la teva consulta');
        } else {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
    })  // Convertir a JSON
    .then(json => {
        // Imprimir los datos en la consola
        console.log(json);

        // Mostrar el array en el div con id "message"
        if (messageDiv) {
            // Iterar sobre los objetos en el array
            json.resultats.forEach((obj, index) => {
                // Iterar sobre las propiedades de cada objeto
                for (let key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        messageDiv.innerHTML += `${key}: ${obj[key]}<br>`;
                    }
                }
                // Agregar un salto de línea después de cada objeto
                messageDiv.innerHTML += '<br>';
            });
        } else {
            console.log('El div con id "message" no se encontró en el documento.');
        }
    })
    .catch(err => {
        // Imprimir los datos en la consola
        console.error(err);

        // Mostrar el mensaje de error en el div con id "message"
        if (messageDiv) {
            // Asigna el mensaje de error al contenido del div
            messageDiv.innerHTML += err.message + "<br>" || 'Error desconocido';
        } else {
            console.log('El div con id "message" no se encontró en el documento.');
        }
    });// Capturar errores

// Ejercicio 2

let data = {
    username: "pep",
    userpass: "123"
};

fetch('http://localhost:3000/api/logininsert', {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" }
})
    .then(response => {
        if (response.status === 200) {
            return response.json();
        } else if (response.status === 409) {
            throw new Error('Conflicto: El usuario ya existe en la base de datos');
        } else {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
    })
    .then(json => {
        console.log(json)
        if (!json.error) {
            messageDiv.innerHTML += json.message + "<br>";
        }
    })
    .catch(err => {
        // Imprimir los datos en la consola
        console.error(err);

        // Mostrar el mensaje de error en el div con id "message"
        if (messageDiv) {
            // Asigna el mensaje de error al contenido del div
            messageDiv.innerHTML += err.message + "<br>" || 'Error desconocido';
        } else {
            console.log('El div con id "message" no se encontró en el documento.');
        }
    });


