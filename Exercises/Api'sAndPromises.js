const axios = require("axios");
const weatherApiKey = require("../config/Keys");

/* 1 Make a postman call that uses the 5-day forecast from OWM (hint: use the documentation here - https://openweathermap.org/forecast5) */


/* 2 Create a function that takes an argument that is a string representing a City and returns the OWN forecast5 result for that city. */
const forecasts5DayResult = async (city) => {
    return await axios.get(`api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${weatherApiKey}`);
}

forecasts5DayResult("Sydney").then(data) // need .then to tell the function what promise needs to be returned

/* 3 Make a console app that asks the user to enter a city and returns the 5 day forecast for that city. Make sure the temperature is in degrees celsius (Hint: don't log everything,
try to keep it to the most relevant data). */
