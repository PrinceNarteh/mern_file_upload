const { Schema, model } = require("mongoose");

const singleFileSchema = new Schema(
  {
    fileName: {
      type: String,
      required: [true, "File name is required."],
    },
    filePath: {
      type: String,
      required: [true, "File path is required."],
    },
    fileType: {
      type: String,
      required: true,
    },
    fileSize: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("SingleFile", singleFileSchema);
