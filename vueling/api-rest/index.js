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
    database: 'vueling',
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

// -------------------------------------------------------------- LOGIN USUARIO
app.post('/vueling/login', (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    // Adquirir una conexión desde el pool
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.error('Error adquiriendo conexión del pool: ' + err.stack);
            return res.status(500).send({ error: true, message: 'Error en la conexión a la base de datos' });
        }

        // Consultar la base de datos para verificar la existencia del usuario
        checkUser(email, password, res, connection);
    });
});

const checkUser = (email, password, res, connection) => {
    connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (selectError, selectResults) => {
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

// --------------------------------------------------------------------------- REGISTRAR USUARIO
app.post('/vueling/register', (req, res) => {
    const { nom, cognom, email, password, dni } = req.body;

    // Adquirir una conexión desde el pool
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.error('Error adquiriendo conexión del pool: ' + err.stack);
            return res.status(500).send({ error: true, message: 'Error en la conexión a la base de datos' });
        }

        // Consultar la base de datos para verificar la existencia del usuario
        checkUserExistence(nom, cognom, email, password, dni, res, connection);
    });
});

// Función para verificar la existencia del usuario
const checkUserExistence = (nom, cognom, email, password, dni, res, connection) => {
    connection.query('SELECT * FROM users WHERE email = ?', [email], (selectError, selectResults) => {
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
        insertUser(nom, cognom, email, password, dni, res, connection);
    });
};

// Función para realizar la inserción del usuario
// INSERT INTO users (password) VALUES (?)
const insertUser = (nom, cognom, email, password, dni, res, connection) => {
    connection.query('INSERT INTO users VALUES (?, ?, ?, ?, ?)', [nom, cognom, email, password, dni], (insertError) => {
        if (insertError) {
            handleDatabaseError(insertError, res, 'Error en la consulta de inserción', connection);
            return;
        }

        res.status(200).send({ error: false, message: 'Usuario insertado correctamente en la base de datos' });

        // Liberar la conexión de vuelta al pool
        connection.release();
    });
};

// --------------------------------------------------------------------------- SELECTS CIUDAD
app.get('/vueling/ciudades', function (req, res) {
    // Adquirir una conexión desde el pool
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.error('Error adquiriendo conexión del pool: ' + err.stack);
            return res.status(500).send({ error: true, message: 'Error en la conexión a la base de datos' });
        }

        // Consultar la base de datos para obtener todos los usuarios
        connection.query('SELECT nom_ciutat FROM ciutats', function (error, results, field) {
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

