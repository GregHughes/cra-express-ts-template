import { MongoClient } from 'mongodb';

let db;

async function connectToDb(cb) {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();
    db = client.db('MONGO_DB_NAME'); // change to name of database created in mongo cli
    cb();
}

export {
    db,
    connectToDb,
};