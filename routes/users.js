const router = require('express').Router();
const UsersController = require('./../controllers/users.controller')
 
/**
 * @swagger
 * /users/form:
 *  get:
 *    description: obtener el formulario para nuevo usuario en el sistema
 *    responses:
 *      200:
 *        description: success response
 *      400:
 *        description: bad data request    
 */
 router.get('/form', UsersController.form);

 /**
 * @swagger
 * /users:
 *  get:
 *    description: obtener todos los usuarios del sistema
 *    responses:
 *      200:
 *        description: success response
 *      400:
 *        description: bad data request    
 */
 router.get('/', UsersController.getAll);

/**
 * @swagger
 * /users:
 *  post:
 *    description: crear un usuario nuevo al sistema 
 *    parameters:
 *      - in: body
 *        description: nombre de usuario a agregar
 *        name: user
 *        type: string
 *      - in: body
 *        name: password
 *        description: contraseña para el nuevo usuario 
 *        type: string
 *    responses:
 *      200:
 *        description: success response
 *      400:
 *        description: bad data request    
 */
 router.post('/', UsersController.newUser);

module.exports = router;