const express = require('express')
const app = express()
const { redirect } = require('react-router-dom');
const port = 3000
const db = require('better-sqlite3')('bdd6.01.sqlite')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  const rows = db.prepare('SELECT nom FROM usuaris ').all();
  res.render("index", msgs = rows);
})

app.get('/usuaris', (req, res) => {
  const rows = db.prepare('SELECT * FROM usuaris ').all();
  res.json(rows)
})

app.get('/usuari', (req, res) => {
  // const usuari_id = req.query.id;
  // const rows = db.prepare('SELECT * FROM usuaris where id = ? ').get(usuari_id);
  // res.json(rows)


  res.render("usuari");
})

app.post('/usuari', (req, res) => {
  // const usuari_id = req.query.id;
  // const rows = db.prepare('SELECT * FROM usuaris where id = ? ').get(usuari_id);
  // res.json(rows)
  console.log(req.body);



  if (req.body.nom && req.body.email) {
    const insert = db.prepare("INSERT INTO usuaris (nom, email) VALUES (?,?)");
    const info = insert.run(req.body.nom, req.body.email);
    console.log(info);

  }
  res.redirect("usuari");

})

app.get('/productes', (req, res) => {
  const rows = db.prepare('SELECT * FROM productes ').all();
  res.json(rows)
})

app.get('/producte', (req, res) => {
  // producte_id = req.query.id;
  // const row = db.prepare('SELECT * FROM productes where id = ? ').get(producte_id);
  // res.json(row)

  res.render("producte");
})

app.post('/producte', (req, res) => {
  // const usuari_id = req.query.id;
  // const rows = db.prepare('SELECT * FROM usuaris where id = ? ').get(usuari_id);
  // res.json(rows)
  console.log(req.body);



  if (req.body.nom && req.body.preu) {
    const insert = db.prepare("INSERT INTO productes (nom, preu) VALUES (?,?)");
    const info = insert.run(req.body.nom, req.body.preu);
    console.log(info);

  }
  res.redirect("producte");

})



app.get('/comandes', (req, res) => {
  const comandes = db.prepare('SELECT c.*,p.nom as nom_producte, p.preu,u.* FROM comanda c join productes p on c.productes_id = p.id join usuaris u on c.usuari_id = u.id').all();
  res.json(comandes)
})

app.get('/comanda', (req, res) => {
  comanda_id = req.query.id;
  const row = db.prepare('SELECT c.*,p.nom as nom_producte, p.preu,u.* FROM comanda c join productes p on c.productes_id = p.id join usuaris u on c.usuari_id = u.id where c.id = ? ').get(comanda_id);
  res.json(row)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
