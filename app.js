// app.js
const express = require('express');
const { connect } = require('mongoose');
const connectDB = require('./config/db');

const app = express();

//Connect to DB
connectDB();

app.get('/',(req,res) => res.send('Hello World!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));




