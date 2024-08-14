const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServicioSchema = new Schema({
    servicio: String
    
})

// creacion del modelo 
const Servicio = mongoose.model('servicio', ServicioSchema);
module.exports = Servicio;
