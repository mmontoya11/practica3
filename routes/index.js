const router = require('express').Router();
const auth = require('./../middlewares/auth')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger.config');
const swaggerDocs= swaggerJsDoc(swaggerOptions);

const userRoutes = require('./users')
router.use('/users', auth, userRoutes);

const loginRoutes = require('./login')
router.use('/login', loginRoutes);

const salaRoutes = require('./salas')
router.use('/salas', auth, salaRoutes);

const mensajeRoutes = require('./mensajes')
router.use('/mensajes', auth, mensajeRoutes);

router.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


module.exports = router;