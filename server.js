const fs = require('fs')
const express = require('express')
const path = require("path")

/* const home = require('./public/index.html')
const notes = require('./public/notes.html') */
const PORT = 6969;
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get("/notes", (req, res) =>
{
  res.sendFile(path.join(__dirname, '/public/notes.html'))
})

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
})