const express = require("express");
const router = express.Router();

const Books = require("../../models/books");

router.get("/", (req, res) => {
  Books.findAll().then(allBooks => {
    res.json(allBooks);
  });
});

router.get("/:author", (req, res) => {
  Books.findAll({
    where: {
      author: req.params.author
    }
  }).then(results => {
    res.send(results);
  });
});

router.get("/:title", (req, res) => {
  Books.findAll({
    where: {
      title: req.params.title
    }
  }).then(results => {
    res.send(results);
  });
});

module.exports = router;
