const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
    nombre: String,
    description: String
})

/* creacion del modelo */
const Mascota = mongoose.model('Mascota', mascotaSchema);
module.exports = Mascota;