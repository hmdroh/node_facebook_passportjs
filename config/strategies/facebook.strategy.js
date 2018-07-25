var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;


module.exports = function () {
    passport.use(new FacebookStrategy({
            clientID: '1237797586356713',
            clientSecret: 'd71487a78297ee006fa9d55965be788b',
            callbackURL: 'https://localhost:3000/auth/facebook/callback',
            profileFields: ['id', 'email', 'displayName', 'photos'],
            passReqToCallback: true
        },
        function (req, accessToken, refreshToken, profile, done) {

            var user = {};
            
            // console.log(profile);
            // console.log("=========");
            // console.log(profile._json.picture);
            // user.email = profile.emails[0].value;
            
            user.image = profile._json.picture.data.url;
            user.displayName = profile.displayName;
            user.facebook = {};
            user.facebook.id = profile.id;
            user.facebook.token = accessToken;

            done(null, user);
        }));

}