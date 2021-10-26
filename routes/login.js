const router = require('express').Router();
const Database = require('./../models/database');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

router.use(bodyParser.json());


/**
 * @swagger
 * /login:
 *  get:
 *    description: get all users
 *    responses:
 *      200:
 *        description: success response
 *      400:
 *        description: bad data request    
 */
 router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname,'views','login.html'));
    res.sendFile('/Users/miguelmontoya/Desktop/ITESO/PAE/Documentacion_apis/views/login.html');        
})

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
                expiresIn: 1140
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