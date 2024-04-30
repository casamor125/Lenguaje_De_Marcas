const express = require('express');
const { redirect } = require('react-router-dom');
const app = express()
const port = 3000
const db = require('better-sqlite3')('personas.sqlite')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render("index", msgs = { msgs: ["hola", "desde", "la", "ruta"] });
})


app.get('/personas', (req, res) => {
  const rows = db.prepare('SELECT * FROM personas ').all();
  res.json(rows)
})

app.get('/persona', (req, res) => {
  // personaId = req.query.id;
  // const row = db.prepare('SELECT * FROM personas where id = ? ').get(personaId);
  // res.json(row)
  res.render("persona");
})


app.post("/persona", (req, res) => {
  // personaId = req.body.id;
  // const row = db.prepare('SELECT * FROM personas where id = ? ').get(personaId);
  // res.json(row)
  console.log(req.body);



  if (req.body.nombre && req.body.apellido) {
    const insert = db.prepare("INSERT INTO personas (name, apellido) VALUES (?,?)");
    const info = insert.run(req.body.nombre, req.body.apellido);
    console.log(info);

  }
  res.redirect("persona");

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})