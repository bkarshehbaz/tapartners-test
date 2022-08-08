const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log(req.body.todo);
});
module.exports = app;
// const connectToDb = require("./lib/connect-to-db");
// const validate = require("./lib/validate-test");
// const dbCollection = process.env.MONGODB_COLLECTION;

// module.exports = async (req, res) => {
//   let data = [];
//   req.on("data", chunk => {
//     data.push(chunk);
//   });

//   console.log(data);
//   res.end("pk");
// if (req.method === "OPTIONS") {
//   res.send("ok!");
//   return;
// }

// const { body: payload } = req;

// if (!payload) {
//   res.status(400).json({ type: "error", message: "Not a valid payload" });
//   return;
// }

// const { error } = validate(payload);
// const isValid = !error;

// if (!isValid) {
//   res.status(400).json({ type: "error", message: error });
//   return;
// }

// try {
//   const db = await connectToDb();
//   const collection = db.collection(dbCollection);

//   const data = await collection.insertOne(payload);
//   res.send({ id: data.insertedId });
//   return;
// } catch (error) {
//   res.status(500).json({ type: "error", message: error.message });
// }
// };
