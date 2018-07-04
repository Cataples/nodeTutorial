// console.log(__dirname);
// console.log(__filename);
//  ---------------------------- require -------------------------
stuff = require('./stuff');
const counter = stuff.counter;
const adder = stuff.adder;
const pi = stuff.pi;

const arr = [1,2,3,4,4,4,4];

counter(arr);
adder( 3, 10 );
console.log("pi: " + pi);

//  ---------------------------- event emmiter -------------------------
const events = require('events');
const myEmmiter = new events.EventEmitter();

myEmmiter.on('eventName', function( message ){
    console.log( message );
})

myEmmiter.emit('eventName', "Event was emmited");

//  --------
const util = require('util');

const Person = function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

const Cata = new Person( "Cata" );
const Andrei = new Person( "Andrei" );
const Ples = new Person( "Ples" );

const peopleArray = [ Cata, Andrei, Ples ];
peopleArray.forEach( person => {
    person.on('speak', function( message ){
        console.log( message + " " + person.name );
    })
})

Cata.emit("speak", "Hello there");
Ples.emit('speak', "test testb test");

//  ---------------------------- read/ write files (sync/ async) -------------------------
const fs = require( 'fs' );
const textFile = fs.readFileSync( 'readme.txt', "utf8" );
console.log( textFile );

fs.writeFileSync( 'writeMe.txt ', 'Hellow now');
fs.writeFileSync( 'writeMe.txt ', textFile );

//  pentru async, stergem "Sync", readFile, writeFile
fs.readFile( 'writeMe.txt ', 'utf8', function(err, data){
    if (err) {
        console.log( err );
    }
    console.log( "async: " + data );
} );

//  ---------------------------- create/ remove directories sync/async-------------------------
//  remove files
//  fs.unlinkSync('todelete.txt');

fs.unlink('todelete.txt', function( err, data ) {
    if( err ) {
        console.log( "fisierul nu exista" );
    }
    console.log( "removed" );
})

// create directories
//fs.mkdirSync('stuffDir');

fs.mkdir( 'stuff', function( err, data ) {
    if( err ) {
        console.log( err );
    } else
    console.log( 'dir created ');
})

//  remove directories
//fs.rmdirSync('stuffsadass');

fs.rmdir( 'stuffsadass', function( err, data ) {
    if( err ) {
        console.log( "nu exista fisierul " );
    } else
    console.log( 'dir removed ');
})

// fs.mkdir('stuff', function(){
//     fs.writeFileSync('./stuff/test.txt', "abcd");
// })
