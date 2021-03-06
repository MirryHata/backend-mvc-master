var express = require('express');
var router = express.Router();

var vehiculoController = require('../../controllers/api/vehiculoControllerAPI');

//estas funciones funcionan como llamada para traer las cosas y mostrarlas
router.get('/', vehiculoController.vehiculo_list);
router.post('/create', vehiculoController.vehiculo_create);
router.delete('/delete', vehiculoController.vehiculo_delete);
router.put('/update', vehiculoController.vehiculo_update);

module.exports = router;