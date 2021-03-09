//conexion a la base de mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Carro = new Schema({
    placa: {
        type: String,
        required: true,
        unique: true
    },
    color: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },
    modelo: {
        type: String,
        required: true,
    }
});
//la coleccion se llama vehiculos y le vamos a ir pasando los carros
const model = mongoose.model('Vehiculos', Carro);

//exportar el modelo o coleccion.
module.exports = model;