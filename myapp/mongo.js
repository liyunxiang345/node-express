const MongoDB = require("mongodb").MongoClient;

const _url = "mongodb://127.0.0.1:27017/37";

const connectDb = (fn) => {
    MongoDB.connect(_url,(err,db) => {
        err && console.error("数据库连接失败"); return false;
        fn(db);
        db.close();
    })
}

exports.first = function (dbname,collectionname,json,callback) {
    connectDb(function (db) {
        const DB = db.db(dbname);
        const collection = DB.collection(collectionname);
        let result = collection.first(json,null,callback);
        console.log(result);
    })
}