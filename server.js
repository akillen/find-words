const express = require('express')
const app = express()
const words = require('./lib/words.js')
const fs = require('fs')

const dictionary = JSON.parse(
  fs.readFileSync('./lib/dictionary.json')
).dictionary;

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/search', (req, res) => {
  res.send(words.search('d_g', dictionary));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})