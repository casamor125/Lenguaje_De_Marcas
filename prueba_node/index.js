const express = require('express')
const app = express()
const port = 3000
const db = require('better-sqlite3')('personas.sqlite')

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/personas', (req, res) => {
    const rows = db.prepare('SELECT * FROM personas ').all();
    res.json(rows)
  })

  app.get('/persona', (req, res) => {
    personaId = req.query.id;
    const row = db.prepare('SELECT * FROM personas where id = ? ').get(personaId);
    res.json(row)
  })


  app.post("/Persona", (req, res) => {
    personaId = req.body.id;
    const row = db.prepare('SELECT * FROM personas where id = ? ').get(personaId);
    res.json(row)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})