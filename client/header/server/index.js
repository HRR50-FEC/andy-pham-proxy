const express = require('express');
const bp = require('body-parser');
const cors = require('cors');

const app = express();
const path = require('path');

app.use(cors({
    origin: 'http://localhost:1111'
}));
app.use('/main', express.static('dist/main.js'));
app.use('/css', express.static('dist/styles.css'));

app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
    res.send();
    res.end();
})

const PORT = 1234;
app.listen(PORT, () => {
    console.log(`Port ${PORT} is up and running!`);
})