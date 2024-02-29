//crida als paquets que necessitem
const express = require('express'); //crida del framework Express
const cors = require('cors');//crida del paquet cors per a evitar l'error de CORS
const jwt = require('jsonwebtoken');//crida al paquet que fa possible a Node la creació i gestió de JWT
const mysql = require('mysql');//crida del paquet per poder connectar-nos a mysql des de Node

const app = express();//càrrega del framework


const accessTokenSecret = "67463fghfgh43473";

//cadena de connexió per poder connectar-nos a la nostra BD
const connection = mysql.createConnection({
  host: 'localhost',
  database: 'fitxatges',
  user: 'root',
  password: ''
});

app.use(cors());//apliquem el paquet cors per a tots els recursos

app.use(express.json());//treballem amb JSONs

app.use(express.urlencoded({ extended: true }));
//ens connectem a la BD declara a la cadena de connexió de dalt
connection.connect(function (error) {
  if (error) {
    console.error('Error connecting: ' + error.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});//end connexió
//per a la vista

//app.use('/', express.static(__dirname + '/public/'));

//comprovació que és usuari amb token, només en les rutes que necessitem
const authenticateJWT = (req, res, next) => {
  //console.log("Estic a authenticateJWT");
  const authHeader = req.headers.authorization;
  //console.log(authHeader);
  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        console.log(err)
        return res.sendStatus(403);
      }

      req.user = user;//recollo les dades de la part que jo he enviat
      next();
    });
  } else {
    res.json({ error: true, data: "Permís denegat al servidor" });
  }
};


//per a la crida al recurs /
app.get('/', (req, res) => {
  res.send('Hello to my web');
  //res.sendFile(process.cwd()+"/view/index.html"); //angular dins del servidor
});

//recurs per a loguejar-se
app.post('/login', function (req, res) {

  //console.log("estic a login");

  //recullo l'usuari
  let usuari = req.body.usuari;
  console.log(usuari);

  //recullo la contrasenya
  let contrasenya = req.body.contrasenya;
  console.log(contrasenya);

  //creem l'SQL per poder fer la consulta preparada
  var sql = 'SELECT * FROM usuaris WHERE usuari=? and contrasenya=?';

  //fem la consulta
  connection.query(sql, [usuari, contrasenya], function (error, result) {
    if (error != null) { //si existeix un MySql error
      res.json({ error: true, data: 'Problemes amb el servidor' });

    }
    else {//si tot OK
      console.log(result[0]);
      if (result[0] != undefined) {
        const accessToken = jwt.sign({ dni: result[0].dni, role: result[0].role }, accessTokenSecret, { expiresIn: '20m' });

        //enviem la token
        res.json({ error: false, data: accessToken });
      } else {
        res.json({ error: true, data: 'Credencials incorrectes' });
      }
    }
  });
})//end recurs /login


app.get('/allUsers', authenticateJWT, function (req, res) {

  console.log("estic a allUsers");
  console.log(req);//ens o torna la funcio authenticateJWT
  console.log(req.user.role)
  const role = req.user.role;

  if (role !== 'admin') {
    return res.json({ error: true, data: "Permís denegat al servidor" });
  }

  //creem l'SQL per poder fer la consulta preparada
  var sql = 'SELECT * FROM usuaris';

  //fem la consulta
  connection.query(sql, function (error, result) {
    if (error != null) { //si existeix un MySql error
      res.json({ error: true, data: 'Problemes amb el servidor' });

    }
    else {//si tot OK
      //console.log(result[0]);
      if (result != undefined) {

        //enviem la token
        res.json({ error: false, data: result });
      } else {
        res.json({ error: true, data: 'NO hi ha dades al servidor' });
      }
    }

  });


}); //end recurs /allUsers

app.listen(3000);
