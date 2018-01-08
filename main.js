const jokeHandler = require('./jokeHandler');
const utils = require('./utils');
const express = require('express');
const app = express();

let joke;

app.get('/', function(req,res) {
    res.send('yo what up read some jokes');
});

app.get('/jokes', function(req, res) {
    const rand = Math.floor(Math.random() * 2);
    console.log(rand);
    switch(rand) {
        case 0:
            res.send(jokeHandler.knockknock());
            break;
        case 1:
            res.send(jokeHandler.getRandomJoke().body);
            break;
        default:
            res.send(jokeHandler.getRandomJokeWithTag('meme').body);
            break;
    }
});

app.get('/jokes/:type', function(req, res) {
    const type = req.params.type;
    switch(type) {
        case "knockknock":
            res.send(jokeHandler.knockknock());
            break;
        case "one-liner":
            res.send(jokeHandler.getRandomJoke());
            break;
        default:
            res.send('not a valid joke type');
            break;
    }
});

app.get('/capitalized/jokes', function(req, res) {
    const rand = Math.floor(Math.random() * 2);
    switch(rand) {
        case 0:
            res.send(utils.upperCaseJoke(jokeHandler.knockknock()));
            break;
        case 1:
            res.send(utils.upperCaseJoke(jokeHandler.getRandomJoke().body));
            break;
        default:
            res.send(utils.upperCaseJoke(jokeHandler.getRandomJokeWithTag('meme').body));
            break;
    }
});

app.get('/quotes/jokes', function(req, res) {
    const rand = Math.floor(Math.random() * 2);
    switch(rand) {
        case 0:
            res.send(utils.quoteJoke(jokeHandler.knockknock()));
            break;
        case 1:
            res.send(utils.quoteJoke(jokeHandler.getRandomJoke().body));
            break;
        default:
            res.send(utils.quoteJoke(jokeHandler.getRandomJokeWithTag('meme').body));
            break;
    }
});

app.get('/jokes/repeat/:times', function(req, res) {
    const rand = Math.floor(Math.random() * 2);
    let joke;
    let response = "";
    switch(rand) {
        case 0:
            joke = jokeHandler.knockknock();
            break;
        case 1:
            joke = jokeHandler.getRandomJoke().body;
            break;
        default:
            joke = jokeHandler.getRandomJokeWithTag('meme').body;
            break;
    }
    for (let i = 0; i < req.params.times; i++) {
        response += joke;
    }
    res.send(response);
})

app.listen(8000, function() {
    console.log('server listening on port: ' + 8000);
});
