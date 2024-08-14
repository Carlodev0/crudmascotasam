const express = require('express');
const { find } = require('../models/mascota');
const router = express.Router();


/* enrutamiento */
router.get('/', (req, res) => {
    /*res.send('Hello World!')*/
    res.render('index', {titulo: "Bienvenido a Node.js con express y con ejs"});  
  })
  
/* ejemplo de enrutamiento  */
/*
// enrutamiento a servicios
router.get("/servicios", (req, res)=>{
//res.send("bienvenido a la paginas de servicios");
    res.render('servicios', {titulo: "Nuestros servicios Dinamicos"});
  });
 // enrutamiento a mascotas 
router.get("/mascotas", (req, res)=>{
    //res.send("bienvenido a la paginas de servicios");
        res.render('mascotas', {find: "Mascota"});
      });
  */    
  module.exports = router;
  
