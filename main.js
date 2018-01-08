const jokeHandler = require('./jokeHandler');
const flags = require('flags');
const utils = require('./utils');

flags.defineString('joke', 'kk', 'Type of Joke');
flags.defineBoolean('uppercase', 'Set Joke Uppercase')
flags.defineBoolean('quotes', 'Wrap joke in quotes');
flags.defineInteger('num', 1, 'Number of times to tell joke');

flags.parse();

let joke;

switch(flags.get('joke')) {
    case "o":
        joke = jokeHandler.getRandomJoke().body;
        break;
    case "kk":
        joke = jokeHandler.knockknock();
        break;
    default:
        joke = jokeHandler.getRandomJokeWithTag(flags.get('joke')).body;
        break;
}


if (flags.get('uppercase')) {
    joke = utils.upperCaseJoke(joke);
}

if (flags.get('quotes')) {
    joke = utils.quoteJoke(joke);
}

utils.numJokes(flags.get('num'), joke);
