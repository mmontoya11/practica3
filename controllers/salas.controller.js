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
            //Buscamos que el usaurrio exista
            users.findOne({user: req.body.user})
            .then(result=>{
            if(result){
                //Buscamos si la sala ya existe
                salas.findOne({userMaster: req.body.user, nombreSala:req.body.name }).then(resultSalas=>{
                    if(resultSalas){
                        res.send('Sala ya existe');
                    }else{
                        //creamos la sala
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
        const salaUsuario = new Database('sala_usuario');

        

        if(req.body.user!=''){
            //buscamos que exista el usuario que pide entrar a la sala
            users.findOne({user:req.body.user}).then(result=>{
                if(result){
                    //Buscamos si existe la sala
                    salas.findOne({userMaster : req.body.userMaster ,nombreSala: req.body.name }).then(resultSalas=>{
                        console.log({userMaster : req.body.userMaster ,nombreSala: req.body.name,authUser: req.body.user })
                        if(resultSalas){

                            //Validamos si el usuario ya esta dentro de la sala
                            salaUsuario.findOne({userMaster: req.body.userMaster, authUser: req.body.user , nombreSala:req.body.name}).then(resultUsuarioSala=>{
                                if(resultUsuarioSala){
                                    res.send('usuario ya estaba registrado en la sala');
                                }else{
                                    salaUsuario.insertOne({userMaster: req.body.userMaster, authUser: req.body.user ,nombreSala:req.body.name});
                                    res.send('se agrego usuario '+ req.body.user +' la sala');
                                }
                            }).catch(err=>{});

                        }else{
                            res.send('no se encontro la sala');
                        }

                    }).catch(err=>{});
                }else{
                    res.send('no se encontro la usuario en bd');
                }
            }).catch(err=>{});
        }else{
            res.send('no se encontro usuario en el cuerpo');
        }

     }

}
module.exports = new SalasController();