const e = require('express');
const express = require('express')
const app = express()
const port = 3000

/* coneccion a la base de datos */
const mongoose = require('mongoose');
const usuario = 'full-stack';
const password = 'wv3fbYIz85Cp6cvU';
const dbname='mascotas';

const uri = `mongodb+srv://${usuario}:${password}@cluster0.j6obnuu.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(uri)
  .then(()=> console.log('conectado a mongodb'))
.catch(e => console.log('error al conectar',e))

/* middleware para contenido estatico */
app.use(express.static(__dirname + '/public'));

/* enrutamiento */
app.get('/', (req, res) => {
  res.send('Hello World!')
})

/* ejemplo de enrutamiento  */

app.get("/servicios", (req, res)=>(
  res.send("bienvenido a la paginas de servicios")
));

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`Eejemplo de aplicacion node con express escuchando en puerto ${port}`)
})