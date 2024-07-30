const express = require('express')
const app = express()
const port = 3000

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