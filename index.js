const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// set up express app
const app = express();

//connect to mongodb
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));

//first middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//initialize routes
app.use('/api', require('./routes/api'));

//error handling middleware
app.use(function (err, req, res, next) {
    res.status(422).send({ error: err._message });
});

//listen for requests
app.listen(process.env.port || 4000, function() {
    console.log('listening for reqeusts');
});