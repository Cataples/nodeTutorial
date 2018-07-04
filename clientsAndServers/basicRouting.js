var http = require('http');
var fs = require('fs');


//  WRITE ON SERVER DATA FROM README.TXT
var server = http.createServer(function (request, response) {
    console.log('request was made ' + request.url)
    if ( request.url === "/home" || request.url === "/" ) {
        var myReadStream = fs.createReadStream(__dirname + '/utilFiles/index.html', 'utf8');
        response.writeHead(200, { 'Content-Type': 'text/html' })
        myReadStream.pipe( response );
    } else if ( request.url === "/users" ) {
        var myJsonStream = fs.createReadStream(__dirname + '/utilFiles/users.json', 'utf8');
        response.writeHead(200, { 'Content-Type': 'application/json' })
        myJsonStream.pipe( response );
    } else if ( request.url !== "/home" || request.url !== "/" ) {
        response.writeHead(404, { 'Content-Type': 'text' })
        response.end( request.url + ' is a wrong neighbourhood!' );
    }
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');
