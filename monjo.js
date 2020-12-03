//Guide to Creating a MongoDB Database Along with Admin Database Users/

Start
//mongod --dbpath=/Userscianterajeanetterose/data/db//

TERMINAL COMMANDS
mongod

mongo

show dbs

use mongoCourse

db //mongoCourse//

show dbs

db.createUser({
    user: 'jordan',
    pwd: 'password',
    customData: {startDate: new Date() },
    roles: [
        { role: 'clusterAdmin', db: 'admin' },
        { role: 'readAnyDatabase', db: 'admin' },
        'readWrite'
      ]
    })
    
    copy and paste function into shell
    //May add another user by passing in same function with a different user name
    db.getUsers() //View current users of db//
    db.dropUser('jon') //Delete a user from access to db//


//How to Create a MongoDB Collection
//Collections are like a table and can store many documents//

db.createCollection('books')
// { "ok" : 1 } Returns an object as a key-value collection

> show collections //pulls function back from database so we can view it//
//May show system.indexes. indexs speed up queries but we won't work with them directly

//Guide to Inserting Documents into a MongoDB Collection//

db.books.insert({    //pass in object of key value pairs inside curly braces. Pass in collection as an array//
    "name": "OOP Programming",
    "publishedDate": new Date(),
    "authors": [
      {"name": "Jon Snow"},
      {"name": "Ned Stark"}
    ]
  })
 //Takes A JAVASCRIPT OBJECT 
//There is no Schema whatsoever. Each docu can be as unique as you want but make sure to crate and label responsibily with your structure so you can easily query it.

  //How to Insert Many Documents into a MongoDB Collection//
  //TAKES A JAVASCRIPT ARRAY
  db.books.insertMany([
    {
      "name": "Confident Ruby",
      "publishedDate": new Date(),
      "authors": [
        { "name": "Avdi Grimm" }
      ]
    },
    {
      "name": "The War of Art",
      "publishedDate": new Date(),
      "authors": [
        {"name": "Steven Pressfield"}
      ]
    },
    {
      "name": "Blink",
      "publishedDate": new Date(),
      "authors": [
        {"name": "Malcolm Gladwell"}
      ]
    }
  ])

  //Returns true with list of ObjectIds("some num_letterstr") for each document 

  //How to Query All Documents in a MongoDB Collection with the find() Method//

  db.books.find().pretty()

  //How to Query for Specific Documents in a MongoDB Collection//

  db.books.find( {name: "OOP Programming"} ).pretty()

  //Introduction to MongoDB Projections//

  db.books.find(
    {
      name: "Confident Ruby"
    },
    {
      _id: 0,
      name: 1,
      authors: 1
    }
  ).pretty()

  //How to Query for a Portion of a String in a MongoDB Document//

  db.books.findOne({ name: /.*deep work.*/i })

  db.books.insert({
    "name": "Deep Work: Rules for Focused Success in a Distracted World",
    "publishedDate": new Date(),
    "authors": [
        {"name": "Cal Newport"}
    ]
});

//How to Delete Documents in MongoDB//

db.books.find({name: "OOP Programming"})

db.books.remove({name: "OOP Programming"}, 1) //Function expects an object passed in.Removes a single document
db.books.remove({name: "OOP Programming"}) // Removes all documents

//How to Include Nested Fields in a find Query//

db.books.insert({
    "name": "Blink",
    "publishedDate": new Date(),
    "authors": [
        { "name": "Malcolm Gladwell", "active": "true" },
        { "name": "Ghost Writer", "active": "true" }
    ]
});

db.books.find(
    {
      name: "Blink"
    },
    {
      name: 1,
      publishedDate: 1,
      "authors.name": 1
    }
  ).pretty()

  //Using the findOne Method in MongoDB to Query for a Single Document//
  db.books.findOne({ name: "Blink"}).length()

  db.books.findOne({ name: "Blink"})

  db.books.findOne({ name: "OOP Programming" })

  //How to Check if a Field Exists in a MongoDB Document//

  db.books.insert( 
    {
      "name": "Deep Work: Rules for Focused Success in a Distracted World",
      "publishedDate": new Date(),
      "reviews": 100,
      "authors": [
        {"name": "Cal Newport"}
      ]
    }
  )
  
  db.books.find({ reviews: { $exists: true } })
  db.books.find({ reviews: { $exists: false } })


