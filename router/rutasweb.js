const express = require('express');
const { find } = require('../models/mascota');
const router = express.Router();


/* enrutamiento */
router.get('/', (req, res) => {
    /*res.send('Hello World!')*/
    res.render('index', {titulo: "Bienvenido a Node.js con express y con ejs"});  
  })
  
/* ejemplo de enrutamiento  */


router.get("/servicios", (req, res)=>{
//res.send("bienvenido a la paginas de servicios");
    res.render('servicios', {titulo: "Nuestros servicios Dinamicos"});
  });
  

  module.exports = router;
  
