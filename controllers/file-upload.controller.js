const SingleFile = require("../models/sinlge-file.models");
const MultipleFile = require("../models/multiple-files.models");
const { fileSizeFormatter, removeFile } = require("../middlewares/fileUploads");

exports.getAllSingleFiles = async (_req, res) => {
  try {
    const file = await SingleFile.find();
    res.status(200).send(file);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getAllMultipleFiles = async (_req, res) => {
  try {
    const files = await MultipleFile.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.singleFileUpload = async (req, res, _next) => {
  console.log(req.file);
  if (!req.file) {
    res.status(400).json({ message: "Please upload a file" });
    return;
  }
  try {
    const { filename, path, mimetype, size } = req.file;
    const file = new SingleFile({
      fileName: filename,
      filePath: path,
      fileType: mimetype,
      fileSize: fileSizeFormatter(size),
    });
    await file.save();
    res.status(201).send("File Uploaded Successfully.");
  } catch (error) {
    removeFile(req.file.path);
    res.status(400).send(error.message);
  }
};

exports.multipleFileUpload = async (req, res, next) => {
  if (!req.files) {
    res.status(400).json({ message: "Please upload at least one file" });
    return;
  }
  try {
    let gallery = [];
    req.files.forEach((image) => {
      const file = {
        fileName: image.filename,
        filePath: image.path,
        fileType: image.mimetype,
        fileSize: fileSizeFormatter(image.size),
      };
      gallery.push(file);
    });
    const multipleFile = new MultipleFile({
      title: req.body.title,
      files: gallery,
    });
    console.log(multipleFile);
    await multipleFile.save();
    res.status(200).send("Files Uploaded Successfully.");
  } catch (error) {
    req.files.forEach((image) => {
      removeFile(image.path);
    });
    res.status(400).send(error.message);
  }
};
