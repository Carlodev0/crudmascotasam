const mongoose = require('mongoose');
const schema = mongoose.Schema;

const servicioSchema = new schema({
    servicio: String
 
    
})

// creacion del modelo 
const Servicio = mongoose.model('Servicio', servicioSchema);
module.exports = Servicio;
