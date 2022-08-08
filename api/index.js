const express = require("express");
// const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");
const app = express();
const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

app.set("port", port);

// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);

  console.log(`Server listening on http://${host}:${port}`);
  // consola.ready({
  //   message: `Server listening on http://${host}:${port}`,
  //   badge: true
  // });
}
start();

// const express = require("express");

// const app = express();
// app.get("/test", function(req, res) {
//   res.status(200).json({ message: "Welcome here" });
// });

// // app.listen(3000, () => console.log(`Server up and running on port 3000 !`));
// module.export = app;
// const mongoose = require("mongoose");
// // const passport = require("passport");
// const SAVE = require("./routes/api/users");
// // const sensorRouter = require("./routes/api/sensors");
// // const emailRouter = require("./routes/api/emails");
// // const profileRouter = require("./routes/api/profile");
// const config = require("config");
// const app = express();
// var cors = require("cors");

// // Body parser middleware
// app.use(
//   express.urlencoded({
//     extended: false
//   })
// );

// app.use(express.json());

// // DB Config
// const db = config.get("mongoURI");
// // Connect to MongoDBasdadsfdsasdfa
// // asfdasdf
// // asfasdf
// mongoose
//   .connect(
//     "mongodb+srv://bkar:nh2conh2cuso4@cluster0.d8sxr.mongodb.net/PersonalityTest",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));

// app.use(cors());

// app.get("/testing", (req, res) => {
//   return res.status(200).json({ msg: "Its working" });
// });
// // Routes
// app.use("/api/save", SAVE);
// // app.use("/api/results", sensorRouter);
// // app.use("/api/emails", emailRouter);
// // app.use("/api/profile", profileRouter);

// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server up and running on port ${port} !`));
