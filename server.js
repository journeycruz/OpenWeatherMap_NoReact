const express = require('express');
const app = express();
const results = require('./index');

let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.send(results);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});