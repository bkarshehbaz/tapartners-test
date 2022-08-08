const MongoClient = require("mongodb").MongoClient;

let cachedDb = null;

// const uri = process.env.MONGODB_URI
const uri =
  "mongodb+srv://bkar:nh2conh2cuso4@cluster0.d8sxr.mongodb.net/Personality";

module.exports = async () => {
  if (cachedDb) return cachedDb;

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = await client.db(new URL(uri).pathname.substr(1));

  cachedDb = db;

  return db;
};
