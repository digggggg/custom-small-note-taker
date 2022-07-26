const fs = require('fs')
const express = require('express')
const path = require("path")

const db = require('./db/db.json')
/* const home = require('./public/index.html')
const notes = require('./public/notes.html') */
const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//main domain
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})
//notes page
app.get("/notes", (req, res) =>
{
  res.sendFile(path.join(__dirname, '/public/notes.html'))
})

// api notes get 
app.get('/api/notes', (req, res) =>{
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else{
      return res.json(db);
    }
  })
})
// api notes post request
app.post('/api/notes', (req, res) =>{
  const newNote = {
    
  }
})

// optional delete note delete request
app.delete('/api/notes/:id', (req, res) =>{

})

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
})