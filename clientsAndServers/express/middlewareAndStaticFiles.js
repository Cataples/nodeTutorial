const express = require('express');
const app = express();
app.set( 'view engine', 'ejs' ); // acum express stie ca vreau sa folosesc ejs ca viewengine 
app.use( '/assets', express.static( 'assets' ) ); //    MIDDLEWARE HERE - din fisierul assets, foloseste "assets" ( style.css )

app.get( '/home', ( request, response ) => {
    console.log( "got the index" );
    response.render( 'index.ejs' );
} );

var server = app.listen( 3000, () => {
    console.log( "listening to port 3000" );
} ); 