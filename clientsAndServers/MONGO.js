//  unrelated
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';
//mongod --port 27017 --dbpath=./data

//  FIND
// var collectionName = 'parrots';
// var dbName = 'learnyoumongo';
// var age = process.argv[ 2 ];

// mongo.connect( url, ( err, client ) => {
//     client.db( dbName )
//         .collection( collectionName )
//         .find( {
//             age: { $gt : +age }
//         }).toArray( ( err, values ) => { 
//             console.log( values );
//             client.close();
//         });
// } );

//  FIND - PROJECT
// var collectionName = 'parrots';
// var dbName = 'learnyoumongo';
// var age = process.argv[ 2 ];

// mongo.connect( url, ( err, client ) => {
//     client.db( dbName )
//         .collection( collectionName )
//         .find( {
//             age: { $gt : +age }
//         }).project( {
//             name: 1,
//             age: 1,
//             _id: 0
//         } ).toArray( ( err, values ) => { 
//             console.log( values );
//             client.close();
//         });
// } );

//  INSERT
// var firstName = process.argv[2];
// var lastName = process.argv[3];

// var doc = {
//     firstName: firstName,
//     lastName: lastName
// }

// var collectionName = 'docs';
// var dbName = 'learnyoumongo';


// mongo.connect( url, ( err, client ) => {
//     client.db( dbName )
//         .collection( collectionName )
//         .insert( doc, ( err, values ) => { 
//             if ( err ) throw err;
//             console.log( JSON.stringify( doc ) );
//             client.close();
//         });  
//     });

//  UPDATE
// var collectionName = 'users';
// var dbName = process.argv[2];

// mongo.connect( url, ( err, client ) => {
//     client.db( dbName )
//         .collection( collectionName )
//         .update( {
//             name: 'Tina'
//         }, {
//             $set: {
//                 age: 40
//             }
//         }, ( err, value ) => {
//             if( err ) throw err;
//             console.log( value );
//             client.close();
//         } )
// })

//  REMOVE
// var dbName = process.argv[2];
// var collectionName = process.argv[3];
// var id = process.argv[4];

// mongo.connect( url, ( err, client ) => {
//     if ( err ) throw err;
//     client.db( dbName )
//         .collection( collectionName )
//         .remove( {
//             _id: id
//         }, ( err, data ) => {
//             if ( err ) throw err;
//             console.log( data );
//             client.close();
//         } )
// })

//  COUNT
// var collectionName = 'parrots';
// var dbName = 'learnyoumongo';
// var age = process.argv[2];

// mongo.connect( url, ( err, client ) => {
//     if( err ) throw err;
//     client.db( dbName )
//         .collection( collectionName )
//         .count( {
//             age: { $gt: +age }
//         },( err, data ) => {
//             if( err ) throw err;
//             console.log( data );
//             client.close();
//         } )
// } )

//  AGREGATE
// var size = process.argv[ 2 ]; 
// var match = { $match: { size:size } };
// var group = { $group: { _id: 'average', average: { $avg: '$price' } } };


// mongo.collect( url, ( err, client ) => {
//     if ( err ) throw err;
//     client.db( 'learnyoumongo' )
//         .collection( 'prices' )
//         .aggregate([
//             { match },
//             { group }
//         ].toArray( ( err, data ) => {
//             if ( err ) throw err;
//             if ( !data.length ) {
//                 throw new Error( 'No results found' )
//             }
//             var o = data[0]
//             console.log( Number( 0.average ).toFixed( 2 ) );
//             client.close();
//         } ) )
// } )