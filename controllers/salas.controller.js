const Database = require('./../models/database');
class SalasController{
     

     getAll(req, res){
        const database = new Database('salas');
        database.find({}).toArray( function(err, result) {
            if (result){
                console.log('Resultados: ', result);
                res.send(result);
            } else{
                console.log('no se encontraron  salas');
                res.send('no se encontraron salas');
            }
        });
     };

     create(req, res){
        const salas = new Database('salas');
        const users = new Database('users');
        if(req.body.user!='' && req.body.name!=''){
            users.findOne({user: req.body.user})
            .then(result=>{
            if(result){
                salas.findOne({userMaster: req.body.user, nombreSala:req.body.name }).then(resultSalas=>{
                    if(resultSalas){
                        res.send('Sala ya existe');
                    }else{
                        salas.insertOne({userMaster: req.body.user, nombreSala:req.body.name });
                        res.send('se creo la sala');
                    }
                }).catch(err=>{});
                
            }else{
                console.log('no se encontro el usuariooooooooo');
                res.send('no se encontro el usuarioooooooooo');
            }
        })
        .catch(err=>{});
        }else{
            res.send('usuario o nombre de sala invalido');
            console.log('post salas fallo');
        }
     }

     invite(req, res){
        const salas = new Database('salas');
        const users = new Database('users');

        if(req.body.user!='' && req.body.name!=''){
            
        }

     }

}
module.exports = new SalasController();