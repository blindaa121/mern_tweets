const Validator = require('validator')
const validText = require('./valid-text')

module.exports = function validateRegisterInput(data) {
  let errors = {}
  const { isEmail, isEmpty, isLength, equals } = Validator

  data.username = validText(data.username) ? data.username : ''
  data.firstName = validText(data.firstName) ? data.firstName : ''
  data.lastName = validText(data.lastName) ? data.lastName : ''
  data.email = validText(data.email) ? data.email : ''
  data.password = validText(data.password) ? data.password : ''
  data.password2 = validText(data.password2) ? data.password2 : ''
  
  if (isEmpty(data.username)) errors.username = 'Username field is required'
  if (isEmpty(data.firstName)) errors.firstName = 'Please enter your first name'
  if (isEmpty(data.lastName)) errors.lastName = 'Please enter your last name'
  if (!isLength(data.username, { min: 6, max: 30 })) errors.username = 'Username must be between 6 and 30 characters'
  if (isEmpty(data.email)) errors.email = 'Email field is required'
  if (data.email && !isEmail(data.email)) errors.email = 'Email is invalid'
  if (isEmpty(data.password)) errors.password = 'Password field is required'
  if (!isLength(data.password, { min: 8, max: 30 })) errors.password = 'Password must contain at least 6 characters'
  if (isEmpty(data.password2)) errors.password2 = 'Please confirm password'
  if (data.password2 && !equals(data.password, data.password2)) errors.password2 = 'Passwords do not match'

  return { errors, isValid: !Object.keys(errors).length }
}
