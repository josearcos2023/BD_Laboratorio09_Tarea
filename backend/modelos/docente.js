var mongoose = require("mongoose");
var EsquemaDocente = mongoose.Schema({
    codigo: String,
    nombre: String,
    departamento: String,
    curso: String,
    correo: String
});
module.exports = mongoose.model("Docentes",EsquemaDocente,"Docentes")