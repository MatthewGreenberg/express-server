const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
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


  app.post(
    '/api/signup',
    passport.authenticate('local-signup'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.post(
    '/api/login',
    passport.authenticate('local-login'),
    (req, res) => {
      console.log('req user is:', req.user);
      res.send(req.user);
    }
  );
}

