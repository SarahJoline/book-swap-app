const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/home", (req, res) => {
  // ^^ insert file location
  res.sendFile(path.join(__dirname, "../../client/index.html")); // insert html path
});

router.get("/user/new", (req, res) => {
  // ^^ insert file location
  res.sendFile(path.join(__dirname, "../../client/sign-up.html")); // insert html path
});

router.get("/profile/new", (req, res) => {
  // ^^ insert file location
  res.sendFile(path.join(__dirname, "../../client/profile-set-up.html")); // insert html path
});

router.get("/booklists", (req, res) => {
  // ^^ insert file location
  res.sendFile(path.join(__dirname, "../../client/booklist.html")); // insert html path
});

module.exports = router;
