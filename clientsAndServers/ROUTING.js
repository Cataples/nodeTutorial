//unrelated cu restul fisierelor

var express = require('express');
var app = express();
var router = express.Router();

var bol = true;

router.use( ( req, res, next ) => {
    console.log("information about to be spitted!!! " + req.method + req.url)
    if( bol ) {
        next();
    } else {
        console.log("NO!")
    }
} )

router.use( '/name/:id', ( req, res, next ) => {
    console.log( req.params.id );
    if( req.params.id === "cata" ) {
        next();
    } else {
        console.log("NO!")
    }
} )

router.get('/name/:id', ( req, res ) => {
    res.send( "El nombre el " + req.params.id )
})

router.get('/sample', (req, res) => {
    res.send("This is working");
})

router.get('/', (req, res) => {
    res.send("This is homepage");
})

router.get('/about', (req, res) => {
    res.send("This is about page");
})

//pentru a face si get si post la acelasi url
app.route('/login')
    .get( ( req, res ) => {
        res.send("this is the login page");
    } )
    .post( ( req, res ) => {
        console.log('processposting');
        res.send('processing has come to an end');
    } )

app.use('/', router );

app.listen(3000);
