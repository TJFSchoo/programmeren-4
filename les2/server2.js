var express = require('express');

var app = express();

app.get('/api/greeting', function(request, response, next));

app.listen(process.env.PORT || 3000, function () {
	console.log('De server luistert op port 3000');
});

module.exports = app;
