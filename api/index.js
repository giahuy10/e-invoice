import express from 'express'
var bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

var news = require('./routes/news')
app.use('/news', news)

// Export the server middleware
export default {
  path: '/api',
  handler: app
}
