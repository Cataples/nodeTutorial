var http = require( 'http' );
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/utilFiles/index.html', 'utf8');

//  WRITE ON SERVER DATA FROM README.TXT
var server = http.createServer( function( request, response ){
    console.log( 'request was made ' + request.url )
    response.writeHead( 200, { 'Content-Type': 'text/html' });
    
    myReadStream.pipe(response); //    read from read stream, send it to write stream
} );

server.listen( 3000, '127.0.0.1' );
console.log( 'listening to port 3000' );
