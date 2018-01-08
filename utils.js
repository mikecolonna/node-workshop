function upperCaseJoke(joke) {
    return joke.toUpperCase();
}

function quoteJoke(joke) {
    return "\"" + joke + "\"";
}

function numJokes(x, joke) {
    for (let i = 0; i < x; i++) {
        console.log(joke);
    }
}

module.exports = {
    upperCaseJoke: upperCaseJoke,
    quoteJoke: quoteJoke,
    numJokes: numJokes
}
