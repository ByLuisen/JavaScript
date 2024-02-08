'use strict'
//importacions i creació de constants per a la seva utiliutzació
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())// todos los accesos estan "protegidos" de error de CORS
//configuració del bodyParser perquè admeti entrades json i
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, 'public')))

var connection = mysql.createConnection({
    host: 'localhost',// servidor de BBDD
    database: 'm06',
    user: 'userangular',// usuario con los minimos privilegios posibles
    password: 'alumne123'
});

connection.connect(function (err) {
    console.log(err);
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);// Llego si no hay error
});

app.get('/', (req, res) => {
    res.send({ message: 'Hola món' })
})

// consultas a mi BBDD
// servimos por GET el recurso /api/login
app.post('/api/login', function (req, res) {
    console.log("estem a login");
    // recojo valores enviados desde 
    const { user, password } = req.body
    console.log("Usuario: " + user + ", contraseña: " + password)
    connection.query('SELECT username FROM users WHERE username = ? AND userpass = ?', [ user, password ], function (error, results, field) {
        console.log(error)
        if (error) {
            res.status(400).send({ resultats: null })
        } else {
            res.status(200).send({ resultats: results })
        }
    });
})

// ejemplo get recogiendo el param
app.get('/api/select/:userName', function (req, res) {
    console.log("estem al select");
    // recojo valores enviados desde 
    const { userName } = req.params
    console.log(userName)
    connection.query('SELECT * FROM users WHERE username = ?', [ userName ], function (error, results, field) {
        console.log(error)
        if (error) {
            res.status(400).send({ resultats: null })
        } else {
            res.status(200).send({ resultats: results })
        }
    });
})

app.listen(3000, () => {
    console.log('Aquesta és la nostra API-REST que corre en http://localhost:3000')
})