module.exports= {
    swaggerDefinition:{
        swagger: "2.0",
        info:{
            "title": "Practica Swagger",
            "description": "Test api for swagger documetation",
            "version": "1.0.0",
            "servers": ['http://localhost:'+ process.env.PORT],
            "contact": {
                "name":"MAMF",
                "email":"algo@algo.com"
            }
        }
    },
    apis:['index.js','routes/login.js', 'routes/mensajes.js', 'salas.js','routes/users.js' ]

}
