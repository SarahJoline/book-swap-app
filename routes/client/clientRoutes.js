const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/index.html"));
});

router.get("/user/new", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/sign-up.html"));
});

router.get("/user/profile/new", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/profile-set-up.html"));
});

router.get("/user/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/profile.html"));
});

router.get("/booklists", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/booklist.html"));
});

router.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dashboard.html"));
});

module.exports = router;
