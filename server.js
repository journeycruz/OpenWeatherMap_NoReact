const express = require('express');
const app = express();
const axios = require('axios');

let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let weatherQueryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=30.2240897&lon=-92.01984270000003&units=imperial&apikey=3ba04439f0de5f224e32e47815249bc9&cnt=3';

let LafayetteForecastTemps = [];

app.get("/", function(req, res) {
    axios
        .get(weatherQueryURL)
        .then(function(response) {
            LafayetteForecastTemps.push(response.data.list[0].main);
            LafayetteForecastTemps.push(response.data.list[1].main);
            LafayetteForecastTemps.push(response.data.list[2].main);
            res.send({ LafayetteForecastTemps })
        });
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});