const { MongoClient, ObjectId } = require("mongodb");
const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri);
const database = client.db('map');
const markers = database.collection('markers');

exports.getAll = async function() {
    try {
        return await markers.find({}).toArray()
    } catch (error) {
        console.log(error);

        return false;
    }
};

exports.get = async function(id) {
    try {
        return await markers.findOne({_id: new ObjectId(id)})
    } catch (error) {
        console.log(error);

        return false;
    }
};

exports.delete = async function(id) {
    try {
        await markers.deleteOne({_id: new ObjectId(id)})
    
        return true;
    } catch (error) {
        console.log(error);

        return false;
    }
};

exports.insert = async function(data) {
    try {
        return await markers.insertMany([data]).toArray();
    } catch (error) {
        console.log(error);

        return false;
    }
};

