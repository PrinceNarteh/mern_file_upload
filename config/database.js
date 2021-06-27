const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/file-upload", {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected successfully!"))
    .catch((error) => {
      throw new Error(error.message);
    });

  const db = mongoose.connection;
  db.on("connection", () => console.log("Mongoose connected to DB."));
};

module.exports = connectDB;
