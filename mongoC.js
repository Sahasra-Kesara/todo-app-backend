import { MongoClient } from "mongodb";

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://sahasrakesara:{password}@cluster0.i2qpuhb.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(connectionString);
let conn;
try {
    conn = await client.connect();
    console.log("connection successfull")
} catch(e) {
    console.error(e);
}
let db = conn.db("sahasrakesara");
export default db;
