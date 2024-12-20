const express = require('express')
const Enmap = require('enmap')

const app = express()
app.use(require('cors')())
app.use(express.static('public'))

const db = new Enmap({
	name: "db",
	dataDir: "./db"
})
db.ensure("clicks", 51920102)

app.get("/api/count", (req, res) => {
	res.json({
		count: db.get("clicks")
	})
})

app.post("/api/count", (req, res) => {
	db.math("clicks", "+", 1)
	res.send("+1")
})

const port = process.env.PORT || 80
app.listen(port, () => {
	console.log(`Launced server on port ${port}.`)
})
