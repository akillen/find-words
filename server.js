const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
const words = require('./lib/words.js');
const fs = require('fs');

const dictionary = JSON.parse(
  fs.readFileSync('./lib/dictionary.json')
).dictionary;

app.set('view engine', 'ejs');
app.set('view options', {layout: false});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.render('index', {pattern: null});
});

app.post('/search', (req, res) => {
  //res.send(words.search(req.body.pattern, dictionary));
  res.render('result', words.search(req.body.pattern, dictionary))
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});