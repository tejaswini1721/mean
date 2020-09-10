const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors()); // allowing all users to make call

// START
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
// const upload = multer({ dest: "uploads" });
const upload = multer({ storage: storage });

// Making the uploads foler public
app.use(express.static("uploads"));
// END

// local module
const fileHandler = require("./file.handler");

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.get("/file-list", async (req, res) => {
  const results = await fileHandler.fileList();

  res.json(results);
});

app.post("/file-upload", upload.single("file"), async (req, res) => {
  const file = req.file;
  const input = req.body;

  await fileHandler.processSingleFile(file);

  res.sendStatus(200);
});

app.post("/multi-upload", upload.array("file"), async (req, res) => {
  const fileList = req.files;
  const input = req.body;

  await fileHandler.processMultiFile(fileList);

  res.sendStatus(200);
});

app.listen(3000);
