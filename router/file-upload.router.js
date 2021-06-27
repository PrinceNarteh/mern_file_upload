const router = require("express").Router();
const {
  singleFileUpload,
  multipleFileUpload,
  getAllSingleFiles,
  getAllMultipleFiles,
} = require("../controllers/file-upload.controller");
const { upload } = require("../middlewares/fileUploads");

router.post("/single-upload", upload.single("profile"), singleFileUpload);
router.post("/multiple-upload", upload.array("gallery"), multipleFileUpload);
router.get("/get-single-files", getAllSingleFiles);
router.get("/get-multiple-files", getAllMultipleFiles);

module.exports = router;
