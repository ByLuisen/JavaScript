'use strict'
//importacions i creació de constants per a la seva utiliutzació
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())// todos los accesos estan "protegidos" de error de CORS
//configuració del bodyParser perquè admeti entrades json i
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.listen(3000, () => {
    console.log('Aquesta és la nostra API-REST que corre en http://localhost:3000')
})

app.get('/', (req, res) => {
    res.send({ message: 'Hola món' })
})
