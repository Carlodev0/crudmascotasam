const express = require('express');
const router = express.Router();

//creacion del modelo 
//const Productos = require(../models/productos);

router.get('/',  (req,res) =>{
    res.render("productos")

})


module.exports = router;