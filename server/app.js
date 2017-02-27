
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({extended: true}); //saw bodyParser used this way on StackoverFlow
var path = require('path');
var port = 5000;

// initial jokes provided in discription
var jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  },
  {
    whoseJoke: "Kris",
    jokeQuestion: "How many software engineers does it take to change a lightbulb?",
    punchLine: "None! That's a hardware problem!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Friends are like snow flakes...",
    punchLine: "If you pee on them they disappear."
  }
];

app.get('/', function(req, res) {
  res.sendFile( path.resolve( 'server/public/views/index.html'))
});

app.get('/jokes', function(req, res) {
  res.send(jokes);
});

app.post('/jokes', urlEncoded, function(req, res) {//over the weekend, when doing my homework, StackoverFlow
//used urlEncoded in an app.post.  I tried it think that it would fix my issue but it didn't
  jokes.push({
    whoseJoke: req.body.name,
    jokeQuestion: req.body.setUp,
    punchLine: req.body.punchLine
  })
  res.sendStatus(200)
});

app.use(express.static('server/public'));

app.listen(port);
