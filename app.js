const express = require('express')
const app = express() // Creates a new Express server
const port = process.env.PORT || 5000 // Heroku will use process.env.PORT else local 5000 on development
const mongoose = require('mongoose') // Mongoose acts as an ORM 
const db = require('./config/keys').mongoURI // MongoDB database
const users = require('./routes/api/users') // Users api
const tweets = require('./routes/api/tweets') // Tweets api
const bodyParser = require('body-parser') // Parse data into JSON 

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', (req, res) => res.send('Whattttup')) // Set up GET route 
app.listen(port, () => console.log(`Server is running on port ${port}`))
app.use('/api/users', users)
app.use('/api/tweets', tweets)
