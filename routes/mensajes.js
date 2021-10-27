const router = require('express').Router();
const MensajesController = require('./../controllers/mensajes.controller');

/**
 * @swagger
 * /mensajes:
 *  get:
 *    description: get all messages 
 *    responses:
 *      200:
 *        description: success response 
 *      400:
 *        description: bad data request    
 */
router.get('/', MensajesController.getAll);

/**
* @swagger
* /login:
*  post:
*    description: auth user and get token
*    parameters:
*      - in: body
*        description: nombre de usuario del autor de la sala
*        name: userMaster
*        type: string
*      - in: body
*        name: user
*        description: nombre de usuario autorizado  en la sala
*        type: string
*      - in: body
*        name: nombreSala
*        description: nombre de la sala 
*        type: string
*    responses:
*      200:
*        description: success response
*      400:
*        description: bad data request    
*/
router.post('/', MensajesController.create)


module.exports = router;