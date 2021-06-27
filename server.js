require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 4000;
const connectDB = require("./config/database");

const app = express();
app.use(express.json());
app.use("/upload", express.static(path.join(__dirname, "uploads")));

app.use(cors());

app.use("/api", require("./router/file-upload.router"));

app.listen(port, () => {
  connectDB();
  console.log("Server up and running.");
});
