const db = require("./models/books.js");

// console.log(db);

// db.User;
// db.Profile;

// db.Profile.belongsTo(db.User, {
//   foreignKey: {
//     allowNull: false
//   }
// });

// db.User.hasMany(db.Profile, {
//   onDelete: "cascade"
// });

db.User.findAll({
  //raw: true,
  include: [db.Profile, db.WantedBooks]
})
  .then(data => {
    //console.log(data);
    var MickyArr = [];

    data.forEach(user => {
      //console.log(user.dataValues);
      MickyArr.push(user.dataValues);
      MickyArr.push(user.dataValues.wanted_books);
    });

    //onsole.log(MickyArr);
    console.table(MickyArr);
    console.log(MickyArr[10].wanted_books);
    // console.log(MickyArr[2].profile.dataValues.userId);
  })
  .catch(err => {
    console.log(err);
  });

// db.User.create({
//   email: "Sarah@Home.com",
//   password: "Password"
// })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// db.Profile.create({
//   photo: "BOOGER",
//   firstName: "Captain",
//   lastName: "Underpants",
//   location: "Liberty",

//   userId: 2
// })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// db.User.create({
//   email: "ABrand@TheUK.com",
//   password: "Kooks"
// })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// db.Profile.create({
//   photo: "CAT",
//   firstName: "Kirk",
//   lastName: "Captain",
//   location: "Jersey",

//   userId: 1
// })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// db.User.create({
//   email: "Hannah@gonetobed.com",
//   password: "HungryForHummus"
// })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// db.Profile.create({
//   photo: "PUPPIES",
//   firstName: "Jenny",
//   lastName: "Varnadeau",
//   location: "Belgium",

//   userId: 3
// })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// ======================

// db.User.create({
//   id: 100,
//   email: "MickeyMouse@Home.com",
//   password: "Napping"
// })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// db.Profile.create({
//   photo: "Toe",
//   firstName: "Jocelyn",
//   lastName: "Chavez",
//   location: "Los Angeles",

//   userId: 100
// })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// db.WantedBooks.create({
//   title: "Crime and Punishment",
//   author: "Dostoyevsky",

//   userId: 100
// })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
