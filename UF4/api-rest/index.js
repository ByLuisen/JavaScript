'use strict'
//importacions i creació de constants per a la seva utiliutzació
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const path = require('path')
const history = require('connect-history-api-fallback');

const app = express()
app.use(history());
app.use(cors())// todos los accesos estan "protegidos" de error de CORS
//configuració del bodyParser perquè admeti entrades json i
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, 'public')))

var connection = mysql.createConnection({
    host: 'localhost',// servidor de BBDD
    database: 'm06',
    user: 'root',// usuario con los minimos privilegios posibles
    password: ''
});

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        res.status(500).send({ error: true, message: 'Error al conectar con la base de datos.' });
        return;
    }
    console.log('Connected as id ' + connection.threadId);
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
    connection.query('SELECT username FROM users WHERE username = ? AND userpass = ?', [user, password], function (error, results, field) {
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
    connection.query('SELECT * FROM users WHERE username = ?', [userName], function (error, results, field) {
        console.log(error)
        if (error) {
            res.status(400).send({ resultats: null })
        } else {
            res.status(200).send({ resultats: results })
        }
    });
})

app.get('/users', function (req, res) {
    connection.query('SELECT * FROM users', function (error, results, field) {
        console.log(error)
        if (error) {
            res.status(400).send({ resultats: null })
        } else {
            res.status(200).send({ resultats: results })
        }
    });
})

app.get('/password/:userName', function (req, res) {
    console.log("estem al select");
    // recojo valores enviados desde 
    const { userName } = req.params

    connection.query('SELECT userpass FROM users WHERE username = ?', [userName], function (error, results, field) {
        console.log(error)
        if (error) {
            res.status(400).send({ resultats: null })
        } else {
            res.status(200).send({ resultats: results })
        }
    });
})

app.put('/insertUser', function (req, res) {
    console.log("estem al select");
    // recojo valores enviados desde 
    const { username, userpass } = req.body

    connection.query('INSERT INTO users VALUES (?, ?)', [username, userpass], function (error, results, field) {
        console.log(error)
        if (error) {
            res.status(500).send({ error: true, message: 'Error al insertar usuario.' })
        } else {
            res.status(201).send({ error: false, message: 'Usuario insertado correctamente.' })
        }
    });
})

app.listen(3000, () => {
    console.log('Aquesta és la nostra API-REST que corre en http://localhost:3000')
})