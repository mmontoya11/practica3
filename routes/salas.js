const router = require('express').Router();
const SalasController = require('./../controllers/salas.controller');

/**
 * @swagger
 * /salas:
 *  get:
 *    description: get all users
 *    responses:
 *      200:
 *        description: success response
 *      400:
 *        description: bad data request    
 **/
 router.get('/', SalasController.getAll)


/**
* @swagger
* /salas:
*  post:
*    description: crear una nueva sala 
*    parameters:
*      - in: body
*        description: usuario dueño de la sala
*        name: user
*        type: string
*      - in: body
*        name: name
*        description: nombre de la sala a crear
*        type: string
*    responses:
*      200:
*        description: success response
*      400:
*        description: bad data request    
*/
router.post('/', SalasController.create)

/**
* @swagger
* /salas/invite:
*  post:
*    description: agregar un usuario a una sala existente
*    parameters:
*      - in: body
*        description: nombre de usuario dueño de la sala
*        name: userMaster
*        type: string
*      - in: body
*        name: name
*        description: nombre de la sala a ingresar 
*        type: string
*      - in: body
*        name: user
*        description: nombre de usuario a agregar a la sala 
*        type: string
*    responses:
*      200:
*        description: success response
*      400:
*        description: bad data request    
*/
router.post('/invite', SalasController.invite)


module.exports = router;