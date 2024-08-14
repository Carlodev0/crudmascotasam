const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/* coneccion a la base de datos */
const mongoose = require('mongoose');
const usuario = 'full-stack';
const password = 'wv3fbYIz85Cp6cvU';
const dbname='veterinaria';

const uri = `mongodb+srv://${usuario}:${password}@cluster0.j6obnuu.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=Cluster0`


/*conexion a base de datos qya que la otra se pego en mascotas 
const usuario = "full_stack_6pm";
const password = "VeKkaFOEzuitO0qy";
const dbName = "veterinaria";
const uri = `mongodb+srv://${usuario}:${password}@cluster0.zpgqwwo.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
*/
mongoose.connect(uri)
  .then(()=> console.log('conectado a mongodb'))
.catch(e => console.log('error al conectar',e))

/* establecee el motor de plantillas */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/* middleware para contenido estatico */
app.use(express.static(__dirname + '/public'));

/* rutas web */
app.use('/', require('./router/rutasweb'))
app.use('/mascotas', require('./router/mascotas'))
app.use('/servicios', require('./router/servicios'))
app.use('/productos', require('./router/productos'))

/* direccionar a vista 404 cada vez que se de un error */
app.use((req, res, next)=>{
  res.status(404).render('404' , {
    titulo: "Error 404",
    descripcion: "Pagina no encontrada"
  });
})

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`Ejemplo de aplicacion node con express escuchando en puerto ${port}`)
})