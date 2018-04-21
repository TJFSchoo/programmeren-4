const express = require('express');
const morgan = require('morgan');
const Person = require('./model/Person');
const RandomUserAPI = require ('./model/RandomUserAPI');
const bodyParser = require('body-parser');

let app = express();
let port = process.env.PORT || 3000;

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




// Homepage
app.get('/', function (req, res) {
    res.send("Web-applicatie gemaakt door Tom Schoonbeek. Ondersteunt de Contact Card App als datasource. Typ /api achter de URL voor de API-get.")
});

// /api/ - Gebruik api routing voor weergeven result
// Returnt hele API databank
app.get('/api', function (req, res) {
    let api = new RandomUserAPI();
    res.send(api.getContent());
});

// /api/person/ - Returnt Persoon met voor- en achternaam
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

app.listen(port, () => {
    console.log('De server draait op port ' + port);
});