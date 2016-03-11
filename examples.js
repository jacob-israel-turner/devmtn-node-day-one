var http = require('http');
var server = http();

var onRequest = function(req, res) {
  if (req.path === '/test') {
    console.log('getting a request at test!')
    res.body('it worked')
    res.status(200)
    res.send()
  } else if (req.path === '/users') {

  }
}

server.listen(9001, onRequest)


var express = require('express')
var app = express()

app.get('/test', function(req, res) {
  console.log('getting a  request')
  res.json('it worked!')
})

app.listen(9001)



// Node Package Manager




// Syntax!!
// How do I start an app?!  Boilerplate, starter code?
