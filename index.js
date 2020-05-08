// generate a express application, and create the first route handler

// import express library, common js modules
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');    // get access to cookies
const passport = require('passport');          // tell passport to keep track of user session
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');                  // define User model here, the order of requires really matters
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();   // create express application

app.use(bodyParser.json());
// Authentication
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]     // choose from multiple keys
    })
);

app.use(passport.initialize());
app.use(passport.session());      // tell passport to use cookies to authenticate


require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);        // they export a function - app


const PORT = process.env.PORT || 5000;  // Listen for heroku port
app.listen(PORT);