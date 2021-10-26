//Invocamos las librerias necesarias 
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/');
const Database = require('./models/database');

let database ;

//Se instancia la funcion express
const app = express();

app.use(bodyParser.json());

//Configuramos dotenv
require('dotenv').config();

//Seteamos el puerto del servidor
const port = process.env.PORT || 3000;

//nos conectamos a la BD
MongoClient.connect(process.env.MONGO_URL,{
    useUnifiedTopology:true
}, function(err, client){
    if(err){
        console.log('Fail to connect to mongo no se levanto servidor');
    }else{
        console.log('Se conecto a la base de datos');

        database = client.db();

        //Comenzamos a escuchar 
        app.listen(port, () =>{
            console.log(" app liseting in port " + port)
        });
        Database.setDatabase(database);

    }
});


//         RUTAS de End Points
app.get('/', (req, res)=>{
    res.send('api works');
});

app.use('/', apiRoutes);
