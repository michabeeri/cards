const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(__dirname))
app.all('*', (req, res) => res.sendFile(path.join(__dirname, '/index.html')))
app.listen(8080)

console.log("Running at Port 8080")
