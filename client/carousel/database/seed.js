const axios = require('axios')
const db = require('./index.js');
const listing = require('./schema.js');
const c = require('../config.js')
const fs = require('fs')
const sample = require('./sampleData')
const test = sample.sample
const Promise = require('bluebird')

const queries = ['table', 'spoon', 'mug', 'fork', 'clock', 'painting', 'headphones', 'pen', 'pencil', 'marker', 'suitcase', 'purse', 'wallet', 'yarn', 'knitting', 'paintbursh', 'books', 'earring', 'chapstick', 'board game', 'makeup', 'keyboard']

//run this for each query
queries.forEach(query => {
  //get request to api using token and query
  axios.get(`https://api.unsplash.com/search/photos?client_id=${c.unsplash}&query=${query}&per_page=120&page=1`)
    .then(result => {
      //create a 30 image list from the data per query
      let items = result.data.results.slice()
      if (items.length < 30) {
        while (items.length < 30) {
          items[items.length] = items[0]
        }
      }
      //create packets of 6 images each
      for (var i = 0; i < 6; i++) {
        let index = i * 6;
        let package = items.slice(index, index + 6).map(image => {
          return { "raw": image.urls.raw, "full": image.urls.full, "regular": image.urls.regular, "small": image.urls.small, "thumb": image.urls.thumb }
        })
        //ad to DB
        if (package.length > 0) {
          listing.addListing({ imageURLs: package })
        }
      }
      //this is an extra function that i used to create a backup of the data on my machine outside of mongoDB
      // fs.writeFile(`./datastore/${query}.txt`, JSON.stringify(items), (err) => {
      //   if (err) throw err;
      //   console.log('The file has been saved!');
      // });
    })
    .catch(err => console.log(err))

})




