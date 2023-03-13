'use strict';

// Import the express and cors modules
const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '0.0.0.0'

// Create an express app
/*
    This object, which is traditionally named app, has methods for routing HTTP requests, configuring middleware,
    rendering HTML views, registering a template engine, and modifying application settings that control how the
    application behaves (e.g. the environment mode, whether route definitions are case-sensitive, etc.)
 */
const app = express();
app.use(cors());

// Calling the express.json() method for parsing
/*
    express.json() is a built-in middleware function in Express.
    This method is used to parse the incoming requests with JSON payloads and is based upon the bodyparser.
 */
app.use(express.json())

/*
    A route definition. The app.get() method specifies a callback function that will be invoked whenever there is an
    HTTP GET request with a path ('/') relative to the site root. The callback function takes a request and a response
    object as arguments, and calls send() on the response to return the string "Hello World!"
 */
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/message', (req, res) => {
  res.json({message: 'Hello from server!'})
})

app.post('/message', (req, res) => {
//   const {MongoClient} = require("mongodb");
//
// // Replace the following with your Atlas connection string
//   const url = process.env.DATABASE_URL
//   const client = new MongoClient(url);
//
// // The database to use
//   const dbName = "test";
//
//   async function saveMessageToDb() {
//     try {
//       await client.connect()
//       console.log("Connected correctly to server");
//       const db = client.db(dbName);
//
//       const collection = db.collection("messages")
//       const message = req.body
//
//       const promise = await collection.insertOne(message)
//       const myDoc = await collection.findOne()
//       console.log(myDoc)
//     } catch (e) {
//       console.error(e.stack)
//     } finally {
//       await client.close()
//     }
//   }
//
//   saveMessageToDb().catch(console.dir)
})

/*
    Start the server on the specified port and logs the comment to the console.
 */
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
