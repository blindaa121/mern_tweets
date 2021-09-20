const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../../models/User')
const validateLoginInput = require('../../validation/login')
const validateRegisterInput = require('../../validation/register')

// routes
router.get('/test', (req, res) => res.json({ msg: 'This is the users route' }))
// register
router.post('/register', (req, res) => {
  // Check if the email has already been registered 
  const { email, username, password } = req.body
  const { errors, isValid } = validateRegisterInput(req.body)

  if (!isValid) return res.status(400).json(errors)

  User.findOne({ email })
    .then(user => {
      if (user) return res.status(400).json({ email: 'A user has already registered with this email' })
      const newUser = new User({ username, email, password })

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err
          newUser.password = hash
          newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err))
        })
      })
    })
})

// login
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body)
  const { email, password } = req.body 

  if (!isValid) return res.status(400).json(errors)

  User.findOne({ email })
    .then(user => {
      if (!user) {
        errors.email = 'User not found'
        return res.status(404).json(errors)
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) return res.json({ msg: 'Success' })
          errors.passowrd = 'Incorrect password'
          return res.status(400).json(errors)
        })
    })
})

module.exports = router