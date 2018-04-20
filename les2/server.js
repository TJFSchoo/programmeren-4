const express = require('express');
const morgan = require('morgan');
const Person = require('./model/Person');

let app = express();

let result = {
    firstName: "Tom",
    lastName: "Schoonbeek",
    birthDate: "16-05-1990"
};

// Installeer Morgan als logger
app.use(morgan('dev'));

// Gebruik api routing voor weergeven result
app.get('/api/', function (req, res) {
    res.send(result)
});

app.get('/api/person', function (req, res) {
    let user = new Person("Tom", "Schoonbeek");
    res.send(user);
});

app.listen(3000, () => {
    console.log('De server draait op port 3000')
});