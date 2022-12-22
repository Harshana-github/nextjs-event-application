export async function connectDatabase() {
    const client = await MongoClient.connect(
      "mongodb+srv://brand1234:1234@cluster0.v8skwyg.mongodb.net/events?retryWrites=true&w=majority"
    );
    return client
  }
  
export async function insertDocument(client, collection, document) {
    const db = client.db();
    const result = await db.collection(collection).insertOne(document);
    return result
  }