const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const passport = require('passport')

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema)
