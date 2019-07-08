const db = require('../db')

module.exports = (req, res) => {
	db.getCollection('users').find({}).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
