'use strict'
//importacions i creació de constants per a la seva utiliutzació
const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'youraccesstokensecret';// variable entorno/palabra más seria
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

// var connection = mysql.createConnection({
//     host: 'localhost',// servidor de BBDD
//     database: 'm06',
//     user: 'userangular',// usuario con los minimos privilegios posibles
//     password: 'alumne123'
// });

// connection.connect(function (err) {
//     console.log(err);
//     if (err) {
//         console.error('Error connecting: ' + err.stack);
//         return;
//     }
//     console.log('Connected as id ' + connection.threadId);// Llego si no hay error
// });

const users = [
    {
        username: 'john',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'anna',
        password: 'password123member',
        role: 'member'
    }
];

const books = [
    {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "language": "English",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "language": "Danish",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
    },
    {
        "author": "Dante Alighieri",
        "country": "Italy",
        "language": "Italian",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
    },
];

app.get('/', (req, res) => {
    res.send({ message: 'Hola món' })
})

app.post('/login', (req, res) => {
    // Read username and password from request body
    const { username, password } = req.body;

    // Filter user from the users array by username and password
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret);

        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
});

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

app.get('/books', authenticateJWT, (req, res) => {
    res.json(books);
});

app.post('/books', authenticateJWT, (req, res) => {
    const { role } = req.user.role;

    if (role !== 'admin') {
        return res.sendStatus(403);
    }


    const book = req.body;
    books.push(book);

    res.send('Book added successfully');
});

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