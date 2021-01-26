const express = require('express');
const bp = require('body-parser');
const port = 3333;
const listings = require('../database/schema.js');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:1111'
}));
app.use('/bundle', express.static('public/main.js'));
app.use('/css', express.static('public/style.css'));
app.use('/', express.static('public'));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/listing', (req, res) => {
  listings.getRandom(item => {
    res.json(item)
  })
})

app.listen(port, () => {
  console.log(`You are now listening to ${port} radio`)
})