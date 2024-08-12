const express = require('express')
const router = express.Router();

const Mascota = require('../models/mascota');

router.get("/", async (req, res)=>{
    try{
    const arrayMascotas = await Mascota.find();
    //console.log(arrayMascotas)
    res.render("mascotas", {arrayMascotas})
}     catch (error) {
    console.log(error)
}
})

 //   res.render('mascotas' , {arrayMascotas: [
 //       {id: 'mas001', Nombre: 'coco', descripcion: 'Perro FreinchPoddle'},
 //       {id: 'mas002', Nombre: 'nomo', descripcion: 'Perro pinche'},
 //       {id: 'mas003', Nombre: 'poncho', descripcion: 'gato'},
 //       {id: 'mas004', Nombre: 'roco', descripcion: 'loro'}
 //   ]})


/* router para editar un documento */
router.get("/:id",  async  (req, res)=>{
    const id =  req.params.id;
    try{
        const mascotaDB = await Mascota.findOne({_id: id})
        console.log(mascotaDB)
    }
    catch{
        console.log("Error");
    }
})
module.exports = router;
