const express = require('express')
const app = express()
const port = 3000
const db = require('better-sqlite3')('bdd6.01.sqlite')

app.use(express.json());


app.get('/usuaris', (req, res) => {
    const rows = db.prepare('SELECT * FROM usuaris ').all();
    res.json(rows)
  })

  app.get('/usuari', (req, res) => {
    const usuari_id = req.query.id;
    const rows = db.prepare('SELECT * FROM usuaris where id = ? ').get(usuari_id);
    res.json(rows)
  })

  app.get('/productes', (req, res) => {
    const rows = db.prepare('SELECT * FROM productes ').all();
    res.json(rows)
  })

  app.get('/producte', (req, res) => {
    producte_id = req.query.id;
    const row = db.prepare('SELECT * FROM productes where id = ? ').get(producte_id);
    res.json(row)
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
