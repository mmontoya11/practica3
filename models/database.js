let database;

class Database {
    collectionName;
    collection;

    static setDatabase(db){
        console.log('set database')
        database = db;
    }


    constructor(collectionName){
        this.collectionName = collectionName;
        this.collection = database.collection(collectionName);
    }

    findOne(filters){
        return this.collection.findOne(filters);
    }

    insertOne(obj){
        return this.collection.insertOne(obj);
    }
    find(){
        return this.collection.find({});
    }
}

module.exports= Database;