const express = require('express');


// set up express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//initialize routes
app.use('/api', require('./routes/api'));

//listen for requests
app.listen(process.env.port || 4000, function() {
    console.log('listening for reqeusts');
});