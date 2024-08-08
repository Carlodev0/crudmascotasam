const express = require('express')
const router = express.Router();

const mascota = require('../models/mascota');

router.length("/", async (req, res)=>{
    try{
    const arrayMascotas = await Mascota.find();
    console.log(arrayMascotas)
} catch (error) {
    console.log(error)
}

 //   res.render('mascotas', { arrayMascotas: [
//     {id: 'mas001', nombre: 'Kira', descripcion: "Perro Pastor Aleman"},
//        {id: 'mas002', nombre: 'Bella', descripcion: "Gata Criolla"},
//      {id: 'mas003',
})
