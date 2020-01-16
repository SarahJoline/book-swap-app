const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const Book = sequelize.define("book", {
  title: Sequelize.STRING,
  author: Sequelize.STRING
});

Book.sync();

module.exports = Book;
