const express = require('express');
const app = express();

app.get( '/', ( request, response ) => {
    response.send( 'This is the homapge' );
} );

app.get( '/contact', ( request, response ) => {
    response.send( 'This is the conatct page' );
} );

var server = app.listen( 3000, () => {
    console.log( "listening to port 3000" );
} ); 