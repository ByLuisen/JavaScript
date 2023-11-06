'use strict'
//importaciones
const express = require('express')//importo el paquete
const bodyParser = require('body-parser')

//uso
const app = express()//llamo para ser usado el paquete

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//get para el recurso hola
app.get('/hola', (req, res) => {
    res.send({ message: 'Hola món des de /hola' })
}) 

//get para el recurso hola
app.get('/', (req, res) => {
    res.send({ message: 'Estic al meu servidor node express' })
})

//get para el recurso hola
app.post('/', (req, res) => {
    res.send({ message: 'Estic al meu servidor node express' })
})

app.listen(3000, () => {
    console.log('Aquesta és la nostra web node express pel port 3000!!')
}) 