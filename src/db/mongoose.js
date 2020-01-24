const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// // Create a new user instance from user model

// const me = new User({
//   name: "   John Doe   ",
//   email: "  john@gmail.com  ",
//   password: "john45678"
// });

// // Save new user to db
// me.save()
//   .then(me => {
//     console.log(me);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// --------------- Tasks ---------------//

// Create a Taks model

// const task1 = new Task({
//   description: "      Study Node.js               "
// });

// task1
//   .save()
//   .then(task => {
//     console.log(task);
//   })
//   .catch(err => {
//     console.log(err);
//   });
