const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/home", (req, res) => {
  // ^^ insert file location
  res.sendFile(path.join(__dirname, "../../client/index.html")); // insert html path
});

router.get("/", (req, res) => {
  // ^^ insert file location
  res.sendFile(path.join(__dirname, "")); // insert html path
});

router.get("/", (req, res) => {
  // ^^ insert file location
  res.sendFile(path.join(__dirname, "")); // insert html path
});

module.exports = router;
