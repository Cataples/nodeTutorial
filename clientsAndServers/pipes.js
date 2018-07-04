//  create streams
var http = require( 'http' );
var fs = require('fs');

//  readable streams
var myReadStream = fs.createReadStream(__dirname + '/utilFiles/readme.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/utilFiles/writeMe.txt', 'utf8');

//  !!!!!!!!!!!!!! ----------- !!!!!!!!!!!!!!! ---------------- !!!!!!!!!!!!!!!
myReadStream.pipe(myWriteStream); //    face pipe din read streasm in write stream

