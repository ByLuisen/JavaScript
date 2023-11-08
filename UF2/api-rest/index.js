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
app.post('/api/login', function (req, res) {
    console.log("estem a login");
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
            res.status(400).send({ resultats: null })
        } else {
            //////COMPROVACIÓ DE DADES PER CONSOLA DE NODE
            // console.log(results);
            // results.forEach(result => {
            // console.log(result.user);
            // })
            res.status(200).send({ resultats: results })
        }
    });
})
app.listen(3000, () => {
    console.log('Aquesta és la nostra API-REST que corre en http://localhost:3000')
})