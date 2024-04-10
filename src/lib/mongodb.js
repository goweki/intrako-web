import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client = null;
let clientPromise = null;

if (!process.env.MONGODB_URI) {
  throw new Error("Add Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

/**** USE
 * const clientResolved = await clientPromise;
 * const db_cluster = clientResolved.db(process.env.ATLAS_DB);
 * ....
 */
