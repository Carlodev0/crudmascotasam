const express = require('express')
const router = express.Router();

const Servicio = require('../models/servicio');

// buscar todos los documents
router.get("/", async (req, res)=>{
    try{
    const arrayServicios = await Servicio.find();
    //console.log(arrayServicios);
    res.render("servicios", {arrayServicios})
}     catch (error) {
    console.log(error) 
}
})

//ruta del boton crear 
router.get("/crearserv", (req, res)=>{
    res.render('crearserv');
});
/* router para recibir datos del formulario crear */
router.post("/", async (req, res)=>{
    const body = req.body;
    //console.log(body);
    try {
        await Servicio.create(body)
        res.redirect('/servicios')
    } catch (error) {
        console.log('error:', error)
    }
});

/* router para editar un documento */
router.get("/:id",  async  (req, res)=>{
    const id =  req.params.id;
    try{
        const servicioDB = await Servicio.findOne({_id: id})
        
        res.render('detalleserv',{
            servicio: servicioDB,
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
/* router para actualizacion */
router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const body = req.body;
    // console.log(body);
    try {
        const servicioDB= await Servicio.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        res.json({
            estado: true,
            mensaje: 'Servicio Editado'
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            estado: false,
            mensaje: 'Edicion fallida'
        })
    }
});
/* router para eliminar  un documento */
router.delete("/:id",  async  (req, res)=>{
    const id =  req.params.id;
    try{
        const servicioDB = await Servicio.findOneAndDelete({_id: id})
        if (!servicioDB) {
            res.json({
                estado: false,
                mensaje: "No fue posible eliminar el registro"

            })
            
        } else {
            res.json({
                estado: true,
                mensaje: "Registro eliminado"

            }
            )}
        }
        catch(error) {
        console.log("Error", error)
    }
})

module.exports = router;
