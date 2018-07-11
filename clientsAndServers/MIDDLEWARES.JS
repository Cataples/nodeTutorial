//      UNRETAED TO THE REST OF APP
var express = require('express');
var app = express();
var router = express.Router();

//  -------------------- APP LEVEL MIDDLEWARE --------------------
app.use( ( req, res, next ) => {
    console.log("test general middleware");
    next();
})

app.use('/test', ( req, res, next ) => {
    console.log("test route specific middleware");
    next();
})

//  chain 2 middlewates
app.use('/test', ( req, res, next ) => {
    console.log( "middleware chain first print" );
    next();
}, ( req, res, next ) => {
    console.log( "middleware chain second print" );
    next();
})

//  chain middleware + get
app.get('/chain', ( req, res, next ) => {
    console.log( 'go to the next' );
    next();
}, ( req, res ) => {
    res.send( 'this is for the next in chain' );
})

//  skip to the next route (daca if nu e true, sare la urmatoarea ruta)
app.get('/user/:id', ( req, res, next ) => {
    if ( req.params.if === "0" ) {
        next( 'route' );
    } else {
        next();
    }
}, ( req, res, next ) => {
    res.send( 'regular' );
})

app.get('/user/:id', ( req, res, next ) => {
    res.send( 'iregular' )
})

app.get('/test', ( req, res ) => {
    res.send('is working');
})

//  -------------------- ROUTER LEVER MIDDLEWARE -------------------- functioneaza la fel, dar fac bount la o instanta de router
//  no path
router.use( ( req, res, next ) => {
    console.log( 'Time' + Date.now())
    next();
})

//  with path
router.use( 'rout-test', ( req, res, next ) => {
    console.log( 'router chain working - part 1' );
    next();
}, ( req, res, next ) => {
    console.log( 'router chain working - part 2' )
    next();
})

//  handeling a get request
router.get( '/testing/:name', ( req, res, next ) => {
    if ( req.params.name === "Cata" ) {
        next( 'route' );
    } else {
        next();
    }
}, ( req, res, next ) => {
    res.send( req.params.name )
    next();
})

router.get('/', ( req, res ) => {
    console.log('HELLO WORLD!')
})

app.use('/admin', router, function (req, res) {
    res.sendStatus(401)
  })

app.use('/', router);

//  -------------------- ERROR HANDLING -------------------- 
app.use( ( err, req, res, next ) => {
    console.error( err.stack );
    res.status(500).send( 'sth is broke' );
})

app.listen(3000);