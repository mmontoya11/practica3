const Database = require('./../models/database');

class UsersController{

    getAll(req, res){
        const database = new Database('users');

        database.find({}).toArray( function(err, result) {
            if (result){
                console.log('Resultados: ', result);
                res.send(result);
            } else{
                console.log('no se encontraron  usuarios');
                res.send('no se encontraron usuarios');
            }
        });

    };
    
    form(req, res){
        //res.sendFile(path.join(__dirname,'..','views','users.html'));
        res.sendFile('/Users/miguelmontoya/Desktop/ITESO/PAE/Documentacion_apis/views/users.html');
    
    }

    getByName(req, res){
        const database = new Database('users')

        database.findOne({user: 'usuario1'})
        .then(result=>{
            if(result){
                console.log('Resultados: ', result);
                //res.send(result);
            }else{
                console.log('no se encontro el usuario');
                res.send('no se encontro el usuario');
            }
        })
        .catch(err=>{});
    }

    newUser(req, res){
        const database = new Database('users')
        if(req.body.user && req.body.password ){
            res.send('exito se creo usuario');
            database.findOne({user: req.body.user, password:req.body.password }).then(result=>{
                if(result){
                    res.send('usuario ya existe');
                }else{
                    database.insertOne({user: req.body.user, password:req.body.password });
                    console.log('post users exito');
                }
            })
        }else{
            res.send('usuario o contraseña invalido');
            console.log('post login fallo');
        }
    }

}

module.exports = new UsersController();