//  create streams
var http = require( 'http' );
var fs = require('fs');

//  readable streams
var myReadStream = fs.createReadStream(__dirname + '/utilFiles/readme.txt', 'utf8');

// myReadStream.on( 'data', function( chunk ){
//     console.log( 'new chunk recived' );
//     console.log( chunk );
// } );

//  writable streams
var myWriteStream = fs.createWriteStream(__dirname + '/utilFiles/writeMe.txt', 'utf8');

myReadStream.on( 'data', function( chunk ){
    console.log( 'new chunk recived' );
    myWriteStream.write( chunk ); // read this file, write the result into that file
} );

//  diferenta fata de fs.read/write este ca datele vin pe bucati, deci se actualizeaza mult mai rapid