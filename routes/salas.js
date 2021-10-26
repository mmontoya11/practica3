const router = require('express').Router();
const SalasController = require('./../controllers/salas.controller');

/**
 * @swagger
 * /users:
 *  get:
 *    description: get all users
 *    responses:
 *      200:
 *        description: success response
 *      400:
 *        description: bad data request    
 **/
 router.get('/', SalasController.getAll)

 router.post('/', SalasController.create)

 router.post('/invite', SalasController.invite)


module.exports = router;