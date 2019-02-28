const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const express = require('express');
const app = express();

passport.use(new FacebookStrategy({
    clientID:'', //ClientID
    clientSecret:'', //ClientSecretKey
    callbackURL: ''  //CallBackUrl  
},
function(accessToken, refreshToken, profile, done){
    user.findOrCreate({},function(err,user) { 
        if (err) { return done(err);}
        done(null,user);
    });
}
));

app.get('/auth/facebook',passport.authenticate('facebook'));

app.get('/auth/facebook/callback',passport.authenticate('facebook', {failureRedirect: '/login'}),
    function(req,res){
        res.redirect('/SuccLogin');
    }
);

app.get('/SuccLogin',function(req,res){
    res.send('Login Success');
});

app.listen(4300);
module.exports = app;