const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const mongoose = require('mongoose')
const keys = require('../config/keys.js')

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  done(null, user.id)
})
passport.deserializeUser(function(id, done) {
  User.findById(id).then(user => {
    done(null, user)
  })
})
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientScret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('accessToken', accessToken)
      console.log('refreshToken', refreshToken)
      console.log('profile:1', profile)
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (!existingUser) {
          new User({ googleId: profile.id }).save().then(user => done(null, user))
        } else {
          console.log('user already exisit')
          done(null, existingUser)
        }
      })
    }
  )
)
