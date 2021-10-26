const router = require('express').Router();
const auth = require('./../middlewares/auth')

const userRoutes = require('./users')
router.use('/users', auth, userRoutes);

const loginRoutes = require('./login')
router.use('/login', loginRoutes);

const salaRoutes = require('./salas')
router.use('/salas', auth, salaRoutes);


module.exports = router;