const router = require('express').Router();
const Database = require('./../models/database');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');


router.use(bodyParser.json());


/**
 * @swagger
 * /login:
 *  get:
 *    description: get login interface
 *    responses:
 *      200:
 *        description: success response 
 *      400:
 *        description: bad data request    
 */
 router.get('/', (req, res) => {
    res.sendFile('/Users/miguelmontoya/Desktop/ITESO/PAE/Documentacion_apis/views/login.html');        
})

/**
* @swagger
* /login:
*  post:
*    description: auth user and get token
*    parameters:
*      - in: body
*        description: username
*        name: username
*        type: string
*      - in: body
*        name: password
*        description: password of the user named below
*        type: string
*    responses:
*      200:
*        description: success response
*      400:
*        description: bad data request    
*/
router.post('/', (req, res) => {
    
    const users = new Database('users');
    const sesiones = new Database('sesiones');

    //validar si existen las variables
    if(req.body.usuario!= '' && req.body.contrasena != ''){
        const payload = {
            check:  true
        };

        users.findOne({user: req.body.user, password : req.body.password}).then(result=>{
            if(result){
                const token = jwt.sign(payload, process.env.LLAVE, {
                expiresIn: 11400
                });

                console.log('Resultados: ', result);
                           
                sesiones.insertOne({user: req.body.user, password:req.body.password, token: token})
                res.json({
                    usuario: req.body.user,
                    mensaje: 'Autenticación correcta',
                    token: token
                });
            }else{
                console.log('no se encontro el usuario');
                res.send('no se encontro el usuario');
            }
        })
        .catch(err=>{});


    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos"})
    };
});

module.exports = router;