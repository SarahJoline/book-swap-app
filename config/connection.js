const Sequelize = require("sequelize");

const sequelize = new Sequelize("bookswap_db", "root", "Charlotte1904", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
