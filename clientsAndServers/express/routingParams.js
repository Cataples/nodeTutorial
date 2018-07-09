const express = require('express');
const app = express();

app.get( '/profile/:id', ( request, response ) => {
    response.send( 'You requested to see a profile with id of: ' + request.params.id )
} )

var server = app.listen( 3000, () => {
    console.log( "listening to port 3000" );
} ); 