const { Router } = require('express');
const { estacionGetByTopic, estacionGet,estacionesGet,estacionPost,estacionPut,estacionDelete } = require('../controllers/estacion.controller');
const { validateJWT } = require('../middlewares/validateJWT');
const { check } = require('express-validator');
const router = Router();

router.get('/:id', [

], estacionGet)

router.get('/', [
    
], estacionesGet)
//ADD CHECK
router.get('/topic/:topic', [
    
], estacionGetByTopic)

router.post('/', [
    check('topic','No pueden existir mas de una estación con el mismo topico'),
    validateJWT,
], estacionPost)

router.put('/:id', [
    check('topic','No pueden existir mas de una estación con el mismo topico'),
    validateJWT,
], estacionPut)

router.delete('/:id', [
    validateJWT,
], estacionDelete)

module.exports = router;