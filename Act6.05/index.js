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
  res.render("usuari", msgs = rows);

})

app.get('/anadirUsuari', (req, res) => {

  const rows = db.prepare('SELECT * FROM usuaris ').all();
  res.render("anadirUsuari", msgs = rows);

})

app.post('/anadirUsuari', (req, res) => {

  if (req.body.nom && req.body.email) {
    const insert = db.prepare("INSERT INTO usuaris (nom, email) VALUES (?,?)");
    const info = insert.run(req.body.nom, req.body.email);
    console.log(info);

  }
  res.redirect("usuaris");

})

app.get('/productes', (req, res) => {

  // hacer bonito esto no el json y ya
  const rows = db.prepare('SELECT * FROM productes ').all();
  res.render("producte", msgs = rows);
})

app.get('/anadirProducte', (req, res) => {

  // hacer bonito esto no el json y ya
  const rows = db.prepare('SELECT * FROM productes ').all();
  res.render("anadirProducte", msgs = rows);
})

app.post('/anadirProducte', (req, res) => {

  if (req.body.nom && req.body.preu) {
    const insert = db.prepare("INSERT INTO productes (nom, preu) VALUES (?,?)");
    const info = insert.run(req.body.nom, req.body.preu);
    console.log(info);

  }
  res.redirect("productes");

})

app.get('/comandes', (req, res) => {
  const comandes = db.prepare('SELECT c.*,p.nom as nom_producte, p.preu,u.* FROM comanda c join productes p on c.productes_id = p.id join usuaris u on c.usuari_id = u.id').all();
  res.render("comandes", { comandes: comandes });
})

app.post('/comandes', (req, res) => {
  const comandes = db.prepare('SELECT c.*,p.nom as nom_producte, p.preu,u.* FROM comanda c join productes p on c.productes_id = p.id join usuaris u on c.usuari_id = u.id').all();
  res.json(comandes)
})

app.get('/comanda', (req, res) => {

  comanda_id = req.query.id;
  const row = db.prepare('SELECT c.*,p.nom as nom_producte, p.preu as preu_producte,u.* FROM comanda c join productes p on c.productes_id = p.id join usuaris u on c.usuari_id = u.id where c.id = ? ').get(comanda_id);
  res.render("comanda", { comanda: row });

})

app.get('/anadir', (req, res) => {

  const Usuaris = db.prepare('SELECT * FROM usuaris ').all();
  const Productes = db.prepare('SELECT * FROM productes ').all();
  res.render("anadir", { usuari: Usuaris, producte: Productes });//, {producte : Productes}

})

app.post('/anadir', (req, res) => {

  console.log(req.body)
  if (req.body.usuari && req.body.producte) {
    const insert = db.prepare("INSERT INTO comanda (usuari_id, productes_id) VALUES (?,?)");
    const info = insert.run(req.body.usuari, req.body.producte);
    console.log(info);

  }
  res.redirect("anadir");

})

app.get('/editUsuari', (req, res) => {

  comanda_id = req.query.id;
  const row = db.prepare('SELECT c.*,p.nom as nom_producte, p.preu as preu_producte,u.* FROM comanda c join productes p on c.productes_id = p.id join usuaris u on c.usuari_id = u.id where c.id = ? ').get(comanda_id);
  res.render("editUsuari", { comanda: row });

})

app.put('/editUsuari', (req, res) => {

  console.log(req.body)
  if (req.body.nom && req.body.email) {
    const insert = db.prepare("UPDATE comanda (nom, email) VALUES (?,?)");
    const info = insert.run(req.body.nom, req.body.email);
    console.log(info);

  }
  res.redirect("usuaris");


})

app.get('/editProducte', (req, res) => {

  comanda_id = req.query.id;
  const row = db.prepare('SELECT c.*,p.nom as nom_producte, p.preu as preu_producte,u.* FROM comanda c join productes p on c.productes_id = p.id join usuaris u on c.usuari_id = u.id where c.id = ? ').get(comanda_id);
  res.render("editProducte", { comanda: row });

})

app.put('/editProducte', (req, res) => {

  console.log(req.body)
  if (req.body.nom && req.body.email) {
    const insert = db.prepare("UPDATE comanda (nom, email) VALUES (?,?)");
    const info = insert.run(req.body.nom, req.body.email);
    console.log(info);

  }
  res.redirect("productes");


})

app.get('/editComanda', (req, res) => {

  comanda_id = req.query.id;
  const row = db.prepare('SELECT c.*,p.nom as nom_producte, p.preu as preu_producte,u.* FROM comanda c join productes p on c.productes_id = p.id join usuaris u on c.usuari_id = u.id where c.id = ? ').get(comanda_id);
  res.render("editComanda", { comanda: row });

})

app.put('/editComanda', (req, res) => {

  console.log(req.body)
  if (req.body.nom && req.body.email) {
    const insert = db.prepare("UPDATE comanda (nom, email) VALUES (?,?)");
    const info = insert.run(req.body.nom, req.body.email);
    console.log(info);

  }
  res.redirect("comandes");


})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
