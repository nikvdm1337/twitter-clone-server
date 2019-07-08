// Config, importing the modules
const express = require('express')
const app = express()

require('./db')
app.get('/api/users', require('./controllers/get_users') )

app.listen(2000, (err) => {
    if (err) {
    console.log('ERROR', err)
    } else {
    console.log(`Connected to localghost 2000`)
    }
})
