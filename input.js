const axios = require('axios');

const apiKey = '3ba04439f0de5f224e32e47815249bc9';
const lat = '30.2240897';
const lon = '-92.01984270000003';

const weatherQueryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial' + '&apikey=' + apiKey + '&cnt=3';

let input = [];

function getWeather(query) {
    axios
        .get(weatherQueryURL)
        .then(function(response) {
            input.push(response.data.list[0].main.temp);
            input.push(response.data.list[1].main.temp);
            input.push(response.data.list[2].main.temp);
            console.log(input);
        });
};


getWeather(weatherQueryURL);

exports.numbers = input;