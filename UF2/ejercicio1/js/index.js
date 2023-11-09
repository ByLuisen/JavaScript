'use strict'

const messageDiv = document.getElementById('message');

// Función para manejar las respuestas exitosas
const handleSuccessResponse = (json) => {
    // Imprimir los datos en la consola
    console.log(json);

    // Mostrar el array en el div con id "message"
    displayDataInMessageDiv(json);
};

// Función para manejar los errores de la respuesta del servidor
const handleServerError = (response) => {
    if (response.status === 400) {
        throw new Error('Conflicto: Hi ha un error amb la teva consulta');
    } else if (response.status === 500) {
        throw new Error('Error Interno del Servidor: ' + response.statusText);
    } else {
        throw new Error(`Error en la solicitud (Código: ${response.status}): ${response.statusText}`);
    }
};

// Función para imprimir los datos en el div con id "message"
const displayDataInMessageDiv = (json) => {
    // Verificar si el div con id "message" existe en el documento
    if (messageDiv) {
        // Iterar sobre los objetos en el array
        json.resultats.forEach((obj) => {
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
};

// Función para manejar los errores generales
const handleGeneralError = (err) => {
    // Imprimir los datos de error en la consola
    console.error(err);

    // Mostrar mensaje de error al usuario de alguna manera (por ejemplo, una alerta)
    alert(err.message || 'Error desconocido');
};

// Ejercicio 1: Realizar la solicitud al backend
fetch('http://localhost:3000/api/login')
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            handleServerError(response);
        }
    })
    .then(handleSuccessResponse)
    .catch(handleGeneralError);

// Ejercicio 2
const data = {
    username: "pep",
    userpass: "123"
};

fetch('http://localhost:3000/api/logininsert', {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" }
})
    .then(response => {
        if (response.ok) {
            return response.json();
        } else if (response.status === 409) {
            throw new Error('Conflicto: El usuario ya existe en la base de datos');
        } else {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
    })
    .then(json => {
        console.log(json);
        if (!json.error) {
            displaySuccessMessage(json.message);
        }
    })
    .catch(handleGeneralError);

