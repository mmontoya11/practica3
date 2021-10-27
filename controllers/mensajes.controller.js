const Database = require('./../models/database');
class MensajesController{
    getAll(req, res){
        const database = new Database('mensaje');
        database.find({}).toArray( function(err, result) {
            if (result){
                console.log('Resultados: ', result);
                res.send(result);
            } else{
                console.log('no se encontraron  mensajes');
                res.send('no se encontraron mensajes');
            }
        });
     };

     create(req, res){
         console.log('entre al create de mensaje')
        const sala_usuario = new Database('sala_usuario');
        const mensajes = new Database('mensaje');
        //validamos los datos de entrada del API
        if(req.body.user!='' && req.body.userMaster!='' && req.body.nombreSala !='' && req.body.mensaje){
            //Buscamos que el usaurrio este en la sala
            sala_usuario.findOne({authUser: req.body.user, userMaster: req.body.userMaster, nombreSala:req.body.nombreSala})
            .then(result=>{
            if(result){
                //Creamos el mensaje 
                mensajes.insertOne({authUser: req.body.user, userMaster: req.body.userMaster, nombreSala:req.body.nombreSala,mensaje: req.body.mensaje });
                res.send('se creo el mensaje');
            }else{
                console.log('no se encontro el usuariooooooooo');
                res.send('no se encontro el usuarioooooooooo');
            }
        })
        .catch(err=>{});
        }else{
            res.status(400).send('paquete mal enviado');
            console.log('post mensajes fallo');
        }
     };
}
module.exports = new MensajesController();
