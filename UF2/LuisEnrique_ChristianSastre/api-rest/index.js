'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql');
const cors = require('cors')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DEJO ENTRAR A LAS RUTAS DESDE FUERA, EVITO ERROR CORS
app.use(cors())

////// AIXÒ ÉS NOU I SERIA PER TREBALLAR AMB MYSQL
////// COMPTE: hem d'instal·lar mysql per a Node Express amb npm i -S mysql
////// declarem els paràmetres de connexió (millor si l’usuari de connexió no és root sinó un usuari específic per aquesta BBDD
////// i amb permissos restringits
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'testm06',
    user: 'root',
    password: ''
});
/////// fem servir la BBDD que tenim
app.get('/api/login', function (req, res) {
    ////// provem de connectar-nos i capturar possibles errors
    connection.connect(function (err) {
        console.log(err);
        if (err) {
            console.error('Error connecting: ' + err.stack);
            return;
        }
        console.log('Connected as id ' + connection.threadId);
    });
    connection.query('SELECT * FROM users', function (error, results, field) {
        if (error) {
            res.status(400).send({ error: true, resultats: null, message: "Hi ha un error amb la teva consulta" })
        } else {
            res.status(200).send({ error: false, resultats: results, message: "Perfecte!!!" })
        }
    });
})

app.post('/api/logininsert', function (req, res) {
    const { username, userpass } = req.body;
    ////// provem de connectar-nos i capturar possibles errors
    connection.connect(function (err) {
        console.log(err);
        if (err) {
            console.error('Error connecting: ' + err.stack);
            return;
        }
        console.log('Connected as id ' + connection.threadId);
    });
    connection.query('SELECT * FROM users WHERE username = ?', [username], function (selectError, selectResults, selectFields) {
        if (selectError) {
            console.error('Error en la consulta de selección: ' + selectError.message);
            return res.status(500).send({ error: true, message: 'Error en la consulta de selección' });
        }

        // Verifica si ya existe un usuario con el mismo nombre de usuario
        if (selectResults.length > 0) {
            console.log('El usuario ya existe en la base de datos');
            return res.status(409).send({ error: true, message: 'El usuario ya existe en la base de datos' });
        }

        // Si no hay resultados, procede con la inserción
        connection.query('INSERT INTO users (username, userpass) VALUES (?, ?)', [username, userpass], function (insertError, insertResults, insertFields) {
            if (insertError) {
                console.error('Error en la consulta de inserción: ' + insertError.message);
                return res.status(500).send({ error: true, message: 'Error en la consulta de inserción' });
            }

            res.status(200).send({ error: false, message: 'Usuario insertado correctamente en la base de datos' });
        });
    });
})

app.listen(3000, () => {
    console.log('Aquesta és la nostra API-REST que corre en http://localhost:3000')
})