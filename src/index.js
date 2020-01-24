const express = require("express");
require("./db/mongoose");

const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Route for getting all user
app.get("/users", (req, res) => {
  User.find({})
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

// Route for getting a single user
app.get("/users/:id", (req, res) => {
  console.log(req.params);
});

// Route for creating a new user

app.post("/users", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(user => {
      res.status(201).send(user);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

// Route for creating a new task

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then(task => {
      res.status(201).send(task);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
