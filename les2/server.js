var express = require('express')
var app = express()

let result = {
    firstName: "Tom",
    lastName: "Schoonbeek",
    birthDate: "16-05-1990",
};

app.get('/api/', function (req, res) {
    res.send(result)
})

app.listen(3000, () => {
    console.log('De server draait op port 3000')
})