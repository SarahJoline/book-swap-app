const express = require("express");
const router = express.Router();

const db = require("../../models/books");

//API ROUTE to get, post, and delete a new user

let = userArray = [];

router.get("/user", (req, res) => {
  db.User.findAll({
    include: [db.Profile]
  }).then(data => {
    console.log(data);

    data.forEach(user => {
      console.log(user.dataValues);
      userArray.push(user.dataValues);
    });
  });
  res.json(userArray);
});

router.post("/user/new", (req, res) => {
  db.User.create({
    email: req.body.email,
    password: req.body.password
  }).then(data => {
    console.log(data);
    // res.redirect("/");
    res.send(data);
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

router.get("/user/profile", (req, res) => {
  db.Profile.findAll().then(results => {
    res.json(results);
  });
});

router.post(`/user/profile/:id`, (req, res) => {
  db.Profile.create({
    userId: req.body.id,
    photo: req.body.photo,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    location: req.body.location
  }).then(data => {
    console.log(data);
    // res.redirect("/");
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
