var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 9001;

app.use(bodyParser.json());
app.use(function (req, res, next) {
  console.log('There is a request coming in!!');
  next();
});

app.get('/test', function (req, res) {
  res.json('It worked!')
})

app.listen(port, function (e) {
  if (e) return console.error(e)
  console.log('Now listening on port:', port)
});
