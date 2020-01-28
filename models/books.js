const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
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

const Profile = sequelize.define("profile", {
  photo: {
    allowNull: true,
    type: Sequelize.STRING
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

  location: {
    allowNull: false,
    type: Sequelize.STRING
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

Profile.belongsTo(User);
User.hasOne(Profile);
User.hasMany(WantedBooks);
WantedBooks.belongsTo(User);
User.hasOne(BooksToLend);

User.sync();
WantedBooks.sync();
BooksToLend.sync();
Profile.sync();

module.exports = { WantedBooks, BooksToLend, Profile, User };
