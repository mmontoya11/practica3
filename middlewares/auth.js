const jwt = require('jsonwebtoken');

const authMiddleware  = (req, res, next) => {
  const token = req.headers['access-token'];

  if (token) {
    jwt.verify(token, process.env.LLAVE, (err, decoded) => {      
      if (err) {
          console.log(token);
        return res.json({ mensaje: 'Token inválida' });    
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.send({ 
        mensaje: 'Token no proveída.' 
    });
  }
}

module.exports = authMiddleware;