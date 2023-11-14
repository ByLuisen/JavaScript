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
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: '3307',
    database: 'testm06',
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

// --------------------------------------------------------------------------- Exercici 1
app.get('/api/login', function (req, res) {
    // Adquirir una conexión desde el pool
    pool.getConnection(function (err, connection) {
        if (err) {
            console.error('Error adquiriendo conexión del pool: ' + err.stack);
            return res.status(500).send({ error: true, message: 'Error en la conexión a la base de datos' });
        }

        // Consultar la base de datos para obtener todos los usuarios
        connection.query('SELECT * FROM users', function (error, results, field) {
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

app.post('/api/logininsert', (req, res) => {
    const { username, userpass } = req.body;

    // Adquirir una conexión desde el pool
    pool.getConnection(function (err, connection) {
        if (err) {
            console.error('Error adquiriendo conexión del pool: ' + err.stack);
            return res.status(500).send({ error: true, message: 'Error en la conexión a la base de datos' });
        }

        // Consultar la base de datos para verificar la existencia del usuario
        checkUserExistence(username, userpass, res, connection);
    });
});

// Función para verificar la existencia del usuario
const checkUserExistence = (username, userpass, res, connection) => {
    connection.query('SELECT * FROM users WHERE username = ?', [username], (selectError, selectResults) => {
        if (selectError) {
            handleDatabaseError(selectError, res, 'Error en la consulta de selección', connection);
            return;
        }

        // Verifica si ya existe un usuario con el mismo nombre de usuario
        if (selectResults.length > 0) {
            console.log('El usuario ya existe en la base de datos');
            res.status(409).send({ error: true, message: 'El usuario ya existe en la base de datos' });

            // Liberar la conexión de vuelta al pool
            connection.release();
            return;
        }

        // Si no hay resultados, procede con la inserción
        insertUser(username, userpass, res, connection);
    });
};

// Función para realizar la inserción del usuario
const insertUser = (username, userpass, res, connection) => {
    connection.query('INSERT INTO users (username, userpass) VALUES (?, ?)', [username, userpass], (insertError) => {
        if (insertError) {
            handleDatabaseError(insertError, res, 'Error en la consulta de inserción', connection);
            return;
        }

        res.status(200).send({ error: false, message: 'Usuario insertado correctamente en la base de datos' });

        // Liberar la conexión de vuelta al pool
        connection.release();
    });
};

// --------------------------------------------------------------Exercici consulta alumnes
app.post('/api/login', (req, res) => {
    const { username, userpass } = req.body;

    // Adquirir una conexión desde el pool
    pool.getConnection(function (err, connection) {
        if (err) {
            console.error('Error adquiriendo conexión del pool: ' + err.stack);
            return res.status(500).send({ error: true, message: 'Error en la conexión a la base de datos' });
        }

        // Consultar la base de datos para verificar la existencia del usuario
        checkUser(username, userpass, res, connection);
    });
});

const checkUser = (username, userpass, res, connection) => {
    connection.query('SELECT * FROM users WHERE username = ? AND userpass = ?', [username, userpass], (selectError, selectResults) => {
        if (selectError) {
            handleDatabaseError(selectError, res, 'Error en la consulta de selección', connection);
            return;
        }

        if (selectResults.length > 0) {
            console.log('El usuario y la contraseña son válidos');
            res.status(200).send({ success: true, message: 'El usuario y la contraseña son válidos' });
        } else {
            console.log('Nombre de usuario o contraseña incorrectos');
            res.status(401).send({ error: true, message: 'Nombre de usuario o contraseña incorrectos' });
        }

        // Liberar la conexión de vuelta al pool
        connection.release();
    });
};

app.post('/api/cursos', function (req, res) {
    // Adquirir una conexión desde el pool
    pool.getConnection(function (err, connection) {
        if (err) {
            console.error('Error adquiriendo conexión del pool: ' + err.stack);
            return res.status(500).send({ error: true, message: 'Error en la conexión a la base de datos' });
        }

        // Consultar la base de datos para obtener todos los usuarios
        connection.query('SELECT * FROM cursos', function (error, results, field) {
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