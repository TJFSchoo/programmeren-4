let http = require('http');
let port = 3000;

http.createServer(function (request, response){
    console.log('Er was een request');
    response.writeHead(200, {'Content-Type': 'text/plain'});


    let result = {
        firstName: Tom,
        lastName: Schoonbeek,
    };


    response.write(JSON.stringify(result));
    response.end();
}).listen(port);

console.log('De server luistert op port 3000');