const fs = require('fs')
const fsPromises = fs.promises;
const listing = require('./schema.js');

const queries = ['table', 'spoon', 'mug', 'fork', 'clock', 'painting', 'headphones', 'pen', 'pencil', 'marker', 'suitcase', 'purse', 'wallet', 'yarn', 'knitting', 'paintbursh', 'books', 'earring', 'chapstick', 'board game', 'makeup', 'keyboard']


queries.forEach(query => {
  let test;
  fs.readFile(`./datastore/${query}.txt`, (err, data) => {
    if (err) throw err;
    let list = JSON.parse(data);
    if (list.length < 30) {
      while (list.length < 30) {
        list[list.length] = list[0]
      }
    }
    for (var i = 0; i < 6; i++) {
      let index = i * 6;
      let package = list.slice(index, index + 6).map(image => {
        return { "raw": image.urls.raw, "full": image.urls.full, "regular": image.urls.regular, "small": image.urls.small, "thumb": image.urls.thumb }
      })
      if (package.length > 0) {
        listing.addListing({ imageURLs: package })
      }
    }
  });
})


