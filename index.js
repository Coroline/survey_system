// generate a express application, and create the first route handler

// import express library, common js modules
const express = require('express');
const app = express();   // create express application

// route handler
app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;  // Listen for heroku port
app.listen(PORT);