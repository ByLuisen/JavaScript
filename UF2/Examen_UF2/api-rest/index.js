'use strict';

// Imports
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DEJO ENTRAR A LAS RUTAS DESDE FUERA, EVITO ERROR CORS
app.use(cors());

// Port on corre la nostra API-REST
app.listen(3000, () => {
    console.log('Aquesta és la nostra API-REST que corre en http://localhost:3000');
});

// declarem els paràmetres de connexió
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    database: 'zoo',
    user: 'root',
    password: ''
});

// Función para manejar errores
const handleDatabaseError = (err, res, message, connection) => {
    console.error(`Error en la base de datos: ${err.message}`);
    res.status(500).send({ error: true, message: message || 'Error en la base de datos' });

    // Liberar la conexión de vuelta al pool
    if (connection) {
        connection.release();
    }
};

// -------------------------------------------------------------- ELIMINAR ANIMAL
app.post('/animal/eliminar', (req, res) => {
    const { id } = req.body;

    // Adquirir una conexión desde el pool
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.error('Error adquiriendo conexión del pool: ' + err.stack);
            return res.status(500).send({ error: true, message: 'Error en la conexión a la base de datos' });
        }

        // Función que elmina el animal
        deleteAnimal(id, res, connection);
    });
});

const deleteAnimal = (id, res, connection) => {
    connection.query('DELETE FROM animals WHERE id = ?', [id], (selectError, selectResults) => {
        if (selectError) {
            handleDatabaseError(selectError, res, 'Error en la consulta de delete', connection);
            return;
        }

        res.status(200).send({ error: false, message: 'Animal eliminado correctamente en la base de datos' });

        // Liberar la conexión de vuelta al pool
        connection.release();
    });
};

// --------------------------------------------------------------------------- AÑADIR ANIMAL
app.post('/animal/afegir', (req, res) => {
    const { especie, sexe, naixement, pais, continent } = req.body;

    // Adquirir una conexión desde el pool
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.error('Error adquiriendo conexión del pool: ' + err.stack);
            return res.status(500).send({ error: true, message: 'Error en la conexión a la base de datos' });
        }

        // Insertamos el animal
        insertAnimal(especie, sexe, naixement, pais, continent, res, connection);
    });
});

// Función para realizar la inserción del animal
// INSERT INTO users (password) VALUES (?)
const insertAnimal = (especie, sexe, naixement, pais, continent, res, connection) => {
    connection.query('INSERT INTO animals (especie, sexe, any_naixement, pais, continent) VALUES (?, ?, ?, ?, ?)', [especie, sexe, naixement, pais, continent], (insertError) => {
        if (insertError) {
            handleDatabaseError(insertError, res, 'Error en la consulta de inserción', connection);
            return;
        }

        res.status(200).send({ error: false, message: 'Animal insertado correctamente en la base de datos' });

        // Liberar la conexión de vuelta al pool
        connection.release();
    });
};

// --------------------------------------------------------------------------- SELECTS ANIMALES
app.get('/animales/listar', function (req, res) {
    // Adquirir una conexión desde el pool
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.error('Error adquiriendo conexión del pool: ' + err.stack);
            return res.status(500).send({ error: true, message: 'Error en la conexión a la base de datos' });
        }

        // Consultar la base de datos para obtener todos los usuarios
        connection.query('SELECT * FROM animals', function (error, results, field) {
            // Liberar la conexión de vuelta al pool
            connection.release();

            if (error) {
                res.status(400).send({ error: true, resultats: null, message: "Hi ha un error amb la teva consulta" });
            } else {
                res.status(200).send({ error: false, resultats: results, message: "Perfecte!!!" });
            }
        });
    });
});

