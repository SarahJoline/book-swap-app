const express = require("express");
const router = express.Router();
const books = require("../models/books");

router.get("/", (req, res) => {
  books.findAll().then(allBooks => {
    res.json(allBooks);
  });
});

// router.get("/", (req, res) => {
//   console.log("Our server was hit");
// });

module.exports = router;
