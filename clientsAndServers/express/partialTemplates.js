const express = require('express');
const app = express();
const path = require('path'); // ca sa pot adauga fisiere cu un alt path, altfel path-ul mi-l concateneaza ca string
app.set( 'view engine', 'ejs' ); // acum express stie ca vreau sa folosesc ejs ca viewengine 

app.get( '/', ( request, response ) => {
    response.render( 'index.ejs' );
} );

app.get( '/users', ( request, response ) => {
    response.sendFile( path.join( __dirname, '../utilFiles/users.json' ) );
} );

app.get( '/profile/:name', ( request, response ) => {
    var data = {
        age: 26,
        job: "ninja",
        hobbies: [ 'eating', 'farting', 'carting' ]
    }
    response.render( 'profile', {   //  profile - numele fisierului de ejs pe care il randam
        person: request.params.name, //  cu proprietatea "perosn" puten accesa in views/profile, iar proprietatea nema e agala cu req.parameters.name
        data: data       
    } ) // folosim render in loc de sendFile 
} )

var server = app.listen( 3000, () => {
    console.log( "listening to port 3000" );
} ); 