const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('../config/keys.js')

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
    }
  )
)
