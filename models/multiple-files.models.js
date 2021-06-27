const { Schema, model } = require("mongoose");

const multipleFileSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title of the gallery is required."],
    },
    files: [Object],
  },
  {
    timestamps: true,
  }
);

module.exports = model("MultipleFile", multipleFileSchema);
