// Config, importing the modules
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors())

require('./db')

app.get('/api/messages', require('./controllers/get_messages'))
app.post('/api/messages', require('./controllers/post_messages'))

app.get('/api/channels', require('./controllers/get_channels'))
app.post('/api/channels', require('./controllers/post_channels'))

app.get('/api/users', require('./controllers/get_user'))

app.post('/api/signup', require('./controllers/post_user'))
app.post('/api/login', require('./controllers/login'))



app.listen(process.env.PORT, (err) => {
    if (err) {
    console.log('ERROR', err)
    } else {
    console.log(`Connected to localghost ${process.env.PORT}`)
    }
})