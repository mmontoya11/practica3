const router = require('express').Router();
const UsersController = require('./../controllers/users.controller')
 
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
 */
 router.get('/form', UsersController.form);

 router.get('/', UsersController.getAll);

/**
 * @swagger
 * /users:
 *  post:
 *    description: get all users
 *    parameters:
 *      - in: body
 *        description: email of the user
 *        name: username
 *        type: string
 *      - in: body
 *        name: password
 *        description: algo
 *        type: string
 *    responses:
 *      200:
 *        description: success response
 *      400:
 *        description: bad data request    
 */
 router.post('/', UsersController.newUser);

module.exports = router;