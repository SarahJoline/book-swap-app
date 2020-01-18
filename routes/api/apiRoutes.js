const express = require("express");
const router = express.Router();

const db = require("../../models/books");

//API ROUTE to get, post, and delete a new user

router.get("/profile", (req, res) => {
  db.User.findAll().then(results => {
    res.json(results);
  });
});

router.post("/user/new", (req, res) => {
  db.User.create({
    username: req.body.username,
    password: req.body.password
  });
});

router.delete("/user/delete/:id", (req, res) => {
  db.User.destroy({
    where: { id: req.params.id }
  }).then(() => {
    res.end();
  });
});

//API ROUTES to get and post a profile

router.get("/profile", (req, res) => {
  db.Profile.findAll().then(results => {
    res.json(results);
  });
});

router.post("/profile/new", (req, res) => {
  db.Profile.create({
    photo: req.body.photo,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    location: req.body.location,
    rating: req.bosy.rating
  }).then(results => {
    console.log(results);
  });
});

// API ROUTES to get, post, and delete Books I have available

router.get("/mybooks", (req, res) => {
  db.BooksToLend.findAll().then(results => {
    res.json(results);
  });
});

router.post("/mybooks/new", (req, res) => {
  db.BooksToLend.create({
    title: req.body.title,
    author: req.body.author
  }).then(results => {
    console.log(results);
  });
});

router.delete("/mybooks/delete/:id", (req, res) => {
  db.BooksToLend.destroy({
    where: { id: req.params.id }
  }).then(() => {
    res.end();
  });
});

//API ROUTES to get, post and delete books from our wanted list

router.get("/wishlist", (req, res) => {
  db.WantedBooks.findAll().then(results => {
    res.json(results);
  });
});

router.post("/wishlist/new", (req, res) => {
  db.WantedBooks.create({
    title: req.body.title,
    author: req.body.author
  }).then(results => {
    console.log(results);
  });
});

router.delete("/wishlist/delete/:id", (req, res) => {
  db.WantedBooks.destroy({
    where: { id: req.params.id }
  }).then(() => {
    res.end();
  });
});

module.exports = router;
