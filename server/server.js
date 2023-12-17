require("dotenv").config();
const path = require("path");

const express = require("express");
const app = express();

//Mongoose Config
const mongoose = require("./config/connection");

// // API Routes in Express
const routes = require("./routes");
app.use(express.json());
app.use(routes);

// React public files

app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

mongoose.once("open", () => {
  app.listen(process.env.PORT, () =>
    console.log(`Server is listening port ${process.env.PORT}`)
  );
});
