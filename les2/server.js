const express = require('express');
const morgan = require('morgan');
const Person = require('./model/Person');
const bodyParser = require('body-parser');

let app = express();

let result = {
    firstName: "Tom",
    lastName: "Schoonbeek",
    birthDate: "16-05-1990"
};

// Bodyparser
app.use(bodyParser.urlencoded({ 'extended': 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

// Installeer Morgan als logger
app.use(morgan('dev'));

// app.use('*', function(req,res){
//     console.log('Error: Correct end-point does no exist.');
//     let message = "Error: Correct end-point does no exist.";
//     res.send(message);
// });

// Gebruik api routing voor weergeven result
app.get('/api/', function (req, res) {
    res.send(result);
});

app.get('/api/person', function (req, res) {
    let user = new Person("Tom", "Schoonbeek");
    res.send(user);
});

// Het posten van data naar de web applicatie (via postman)
app.post('/api/person', function (req, res) {
    let firstName = req.body.firstname;
    let lastName = req.body.lastname;
    console.log("Received person " + firstName + " " + lastName);
    let newUser = new Person(firstName,lastName);

    // add to DB functionaliteit hier schrijven
    res.send(newUser);
});

app.listen(3000, () => {
    console.log('De server draait op port 3000');
});