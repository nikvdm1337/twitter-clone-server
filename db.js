const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/twitter', {useNewUrlParser:true}, (err) => {
    if (err) {
        console.log("Connection failed: ", err)
    } else {
        console.log("Such connection, many database, much mongo!")
    }
})

module.exports = mongoose