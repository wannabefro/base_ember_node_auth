'use strict';
var passport = require('passport');

/**
* Declare routes here for services/proxies/etc.
* @param {Express} app Express application to add routes to.
*/
module.exports = function(app) {
app.get('/auth/github', passport.authenticate('github'));

app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }),
        function(req, res){
          res.render('oauthsuccess', {access_token: req.user.githubToken});
        })
};

