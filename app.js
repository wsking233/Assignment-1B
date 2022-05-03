// app.js
const express = require('express');
const { connect } = require('mongoose');
const connectDB = require('./config/db');
require("dotenv").config();

const app = express();

//Connect to DB
connectDB();

app.get('/',(req,res) => res.send('Hello World!'));

const port = process.env.PORT || 3000;


// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./frontend/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});

//return the port number
app.listen(port, () => console.log(`Server running on port ${port}`));


