const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const User = sequelize.define("user", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [5, 50]
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [5, 50]
    }
  }
});

const WantedBooks = sequelize.define("wanted_book", {
  title: {
    type: Sequelize.STRING,
    validate: {
      len: [1, 100]
    }
  },
  author: {
    type: Sequelize.STRING,
    validate: {
      len: [1, 100]
    }
  }
});

const BooksToLend = sequelize.define("books_I_have", {
  title: {
    type: Sequelize.STRING,
    validate: {
      len: [1, 100]
    }
  },
  author: {
    type: Sequelize.STRING,
    validate: {
      len: [1, 100]
    }
  },
  available: { type: Sequelize.BOOLEAN, defaultValue: true }
});

const Profile = sequelize.define("profile", {
  photo: {
    allowNull: false,
    type: Sequelize.BLOB
  },

  firstName: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      len: [1, 100]
    }
  },

  lastName: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      len: [1, 100]
    }
  },

  rating: Sequelize.INTEGER
});

User.hasOne(Profile);
User.hasMany(WantedBooks);
User.hasMany(BooksToLend);

User.sync();
WantedBooks.sync();
BooksToLend.sync();
Profile.sync();

module.exports = { WantedBooks, BooksToLend, Profile, User };
