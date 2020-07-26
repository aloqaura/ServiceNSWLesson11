const axios = require('axios'); // axios lets you make requests in a condensed and easy manner
const { weatherApiKey } = require('../config/Keys');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => { // rl.question is a function of readline.
            resolve(ans);
        })
    });
}


async function Program() {
    // Your Code Here...
    let city = await askQuestion("Which city do you want to know the weather for: ");
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${weatherApiKey}`); // axios will allow for diff objects to be accessible - the objects will be diff depending on the code but they will be listed on the website from which the Api key will come from
    console.log(`The maximum temperature in ${response.data.name} is ${response.data.main.temp_max = 273.1}`); // "response.data.name" is one of these accessible objects
    // console.log(response);
    console.log(response.data);
}


Program().then(() => {
    process.exit(0);
});