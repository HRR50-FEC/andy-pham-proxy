const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/fecmodulec';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

console.log('bzzz')

module.exports = db;
