const { MongoClient, ObjectId } = require("mongodb");
const mongoConfig = require("../config/mongo.config.js");

class LibraryMongo {
  constructor() {
    this.client = new MongoClient(mongoConfig.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.client.connect()
      .then(() => {
        console.log("Connected to MongoDB");
        this.db = this.client.db("libraryDB");
        this.collection = this.db.collection("books");
      })
      .catch(error => {
        console.error("Error connecting to MongoDB:", error);
      });
  }

  async listAll() {
    return await this.collection.find().toArray();
  }

  async create(newBook) {
    const result = await this.collection.insertOne(newBook);
    return result.insertedId;
  }

  async update(id, updatedBook) {
    const result = await this.collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedBook }
    );
    return result.modifiedCount;
  }

  async delete(id) {
    const result = await this.collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount;
  }
}

module.exports = LibraryMongo;
