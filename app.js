const express     = require( 'express' ),
app         = express(),
{ engine }  = require( 'express-handlebars' ), // before 6.0.0
port        = process.env.PORT || 1024,
bodyParser  = require( 'body-parser' )

app.use( bodyParser({ extended: false }) )
app.engine( 'handlebars', engine({
defaultLayout: 'main'
}))
app.set( 'view engine', 'handlebars' )

app.get( '/', ( req, res ) => res.render( 'home' ) )
app.get( '/form', ( req, res ) => res.render( 'form' ) )
app.get( '/thank-you', ( req, res ) => res.status( 303 ).render( 'thank-you' ) )
app.post( '/form_post', ( req, res ) => {
    console.log(req.body)
    res.redirect( 303, 'thank-you' )})
    app.use( ( req, res ) => res.status( 404 ).render( '404' ) )
    app.use( ( err, req, res, next ) => res.status( 500 ).render( 500 ) )
    app.listen( port, console.log( `http://127.0.0.1:${ port }` ) )
