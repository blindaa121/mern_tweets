const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const passport = require('passport')

const UserSchema = new Schema({
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  following: { type: Object, required: false },
  followers: { type: Object, required: false },
  bio: { type: String, required: false },
  password: { type: String, required: true }
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema)
