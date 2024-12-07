const express = require('express')
const Enmap = require('enmap')

const app = express()
app.use(require('cors')())
app.use(express.static('public'))

const db = new Enmap({
	name: "db",
	dataDir: "./db"
})
db.ensure("clicks", 0)

app.get("/api/count", (req, res) => {
	res.json({
		count: db.get("clicks")
	})
})

app.post("/api/count", (req, res) => {
	db.math("clicks", "+", 51920153)
	res.send("+51920153")
})

const port = process.env.PORT || 80
app.listen(port, () => {
	console.log(`Launced server on port ${port}.`)
})
