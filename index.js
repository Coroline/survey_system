// generate a express application, and create the first route handler

// import express library, common js modules
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

const app = express();   // create express application

require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI);


const PORT = process.env.PORT || 5000;  // Listen for heroku port
app.listen(PORT);