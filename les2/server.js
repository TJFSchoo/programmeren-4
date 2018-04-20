let http = require('http');

http.createServer(function (request, response){
    console.log('Er was een request');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Hello world!");
    response.end();
}).listen(port);

console.log('De server luistert op port 3000');