/*
LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
*/
const prompt = require("prompt-sync")({ sigint: true });
let language;
const detectLanguage = () => {
    language = prompt("Your language?\t");
    language = language.toLowerCase();
    switch (language) {
        case "mandarin":
        case "chinese":
            console.log('MOST number of native speakers!');
            break;
        case "spanish":
            console.log("2nd place in Number of native speackers");
            break;
        case "english":
            console.log("3rd place");
            break;
        case "hindi":
            console.log("4th place");
            break;
        case "arabic":
            console.log("5th most spoken language");
            break;

        default:
            console.log("Great language too :D");

    }
}
for (let i = 0; i < 5; i++) {
    detectLanguage()
}
/*
Your language?  Bangla
Great language too :D
Your language?  hindi
4th place     
Your language?  arabic
5th most spoken language
Your language?  english
3rd place     
Your language?  tamil
Great language too :D
*/