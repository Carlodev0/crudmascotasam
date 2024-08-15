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

//ruta del boton crear 
router.get("/crear", (req, res)=>{
    res.render('crear');
});

/* router para recibir datos del formulario crear */
router.post("/", async (req, res)=>{
    const body = req.body;
    //console.log(body);
    try {
        await Mascota.create(body)
        res.redirect('/mascotas')
    } catch (error) {
        console.log('error:', error)
    }
});

/* router para editar un documento */
router.get("/:id",  async  (req, res)=>{
    const id =  req.params.id;
    try{
        const mascotaDB = await Mascota.findOne({_id: id})
        //console.log(mascotaDB)
        res.render('detalle',{
            mascota: mascotaDB,
            error: false
        })  
    }
    catch (error) {
        console.log("Error", error)
        res.render('detalle',{
            error: true,
            mensaje: "no se encontro registro que coincida con el id"
        })

    }
})
module.exports = router;
