const passport = require('passport');

module.exports = (app) => {   //create a new error function
    // Add a route handler
    app.get(
        '/auth/google', 
        passport.authenticate('google', {   // google is strategy
            scope: ['profile', 'email']     //what access we want to have
        })
    );

    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};