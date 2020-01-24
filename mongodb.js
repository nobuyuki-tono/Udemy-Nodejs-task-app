// CRUD create, read, update, delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// -- create ID ------//

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to DB");
    }

    // Create a database
    const db = client.db(databaseName);

    // ---------- Create collection and document

    // Define collection

    // db.collection("users").insertOne(
    //   {

    //     name: "Vikrm",
    //     age: 26
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to insert data");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 29
    //     },
    //     {
    //       name: "Gunther",
    //       age: 30
    //     }
    //   ],
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to insert data!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Study English",
    //       completed: false
    //     },
    //     {
    //       description: "Reading a book",
    //       completed: true
    //     },
    //     {
    //       description: "Study Node.js",
    //       completed: false
    //     }
    //   ],
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to insert data to db");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // ---------- Read document from Database  ----------------//
    // db.collection("users").findOne(
    //   { _id: new ObjectID("5e28d1fb05179f08729eaa09") },
    //   (err, user) => {
    //     if (err) {
    //       return console.log("Unable to fetch data from DB");
    //     }

    //     if (!user) {
    //       return console.log("User does not exist!!");
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 27 })
    //   .toArray((err, users) => {
    //     console.log(users);
    //   });
    // db.collection("users")
    //   .find({ age: 27 })
    //   .count((err, count) => {
    //     console.log(count);
    //   });

    //   db.collection("tasks").findOne(
    //     { _id: new ObjectID("5e28d367d2da290896f07bd2") },
    //     (err, result) => {
    //       if (err) {
    //         return console.log("Unable to fetch data from DB");
    //       }

    //       console.log(result);
    //     }
    //   );

    //   db.collection("tasks")
    //     .find({ completed: false })
    //     .toArray((err, task) => {
    //       console.log(task);
    //     });

    // ------------- Update data ------------------//
    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5e28ce8ed9aefd081c429774")
    //     },
    //     {
    //       $set: {
    //         age: 30
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // db.collection("tasks")
    //   .updateMany(
    //     { completed: false },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // db.collection("users")
    //   .deleteMany({ age: 30 })
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    db.collection("tasks")
      .deleteOne({ desctiption: "Study English" })
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(result);
      });
  }
);
