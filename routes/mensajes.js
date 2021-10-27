const router = require('express').Router();
const MensajesController = require('./../controllers/mensajes.controller');

router.get('/', MensajesController.getAll);

router.post('/', MensajesController.create)


module.exports = router;