const knockknock = require('knock-knock-jokes');
const olj = require('one-liner-joke');

module.exports = {
    knockknock: knockknock,
    getRandomJoke: olj.getRandomJoke,
    getRandomJokeWithTag: olj.getRandomJokeWithTag
}
