// Promise - is making a request to execute a code but not wanting it to be completed immediately - is an object

// Can use catch error to engage a console.log or w/e you want

// Function "setTimeout" will wait however long the number entered in milliseconds, very rare in use

// await key word - is to actually wait the set amount of time and then resolve the promise. To use await, it must be inside an async function. 

// An async function removes the need for promise 

const axios = require("axios");
const { weatherApiKey } = require("../config/Keys");


async function Program() {
    let sydneyWeather = await getTheWeather("Sydney");
    console.log(sydneyWeather.data.main.temp - 273.1);
}

Program().then(() => {
    process.exit(0);
});