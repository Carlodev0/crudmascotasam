const mongoose = require('mongose');
const schema = mongoose.schema;

const mascotasSchema = new schema({
    nombre: String,
    description: String
})

/* creacion del modelo */
const Mascota = mongoose.model('mascota', mascotasSchema);
module.exports = Mascota;