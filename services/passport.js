const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const bCrypt = require('bcrypt');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  console.log('user id is:', user.id);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    });
});

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({googleId: profile.id});

    if (existingUser) {
      return done(null, existingUser);
    }

    const user = await new User({ googleId: profile.id }).save();
    done(null, user);
  }),

);

passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  session: true
},
  async (username, password, done) => {
    const existingUser = await User.findOne({ username: username });

    if (existingUser) {
      return done(null, existingUser);
    }

    let hashedPassword

    const user = await new User({ username: username, password: password }).save();
    return done(null, user);
  }),
);

passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  session: true
},
  async (username, password, done) => {
    const existingUser = await User.findOne({ username: username });

    if (!existingUser) {
      return done(null, false, req.flash('loginMessage', 'No user found.'));
    }
    console.log('log in body', existingUser);
    done(null, existingUser);
  })
);


