const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const multer = require("multer");

// acceptable files to upload
const acceptableFiles = ["image/jpg", "image/jpeg", "image/png"];

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "uploads/");
  },
  filename: (_req, file, cb) => {
    const name = crypto.randomBytes(16).toString("hex");
    const ext = path.extname(file.originalname);
    const fileName = `${name}${ext}`;

    cb(null, fileName);
  },
});

const fileFilter = (_req, file, cb) => {
  if (!acceptableFiles.includes(file.mimetype)) {
    cb(null, false);
  } else {
    cb(null, true);
  }
};

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return parseFloat(
    (bytes / Math.pow(1000, index)).toFixed(dm) + " " + sizes[index]
  );
};

const removeFile = (filepath) => {
  try {
    fs.unlinkSync(filepath);
  } catch (error) {
    console.log(error.message);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    // Max Size 1MB
    fileSize: 1 * 1024 * 1024,
  },
});

module.exports = {
  upload,
  fileSizeFormatter,
  removeFile,
};
