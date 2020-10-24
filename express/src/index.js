require( './db/init' );

const express=require('express')
const indexRouter =require('./routes')
const workshopRouter=require('./routes/workshop')
const apiWorkshopRouter=require('./routes/api/workshops')
const {pageNotFoundHandler, genericErrorHandler}=require('./middleware/errors')
const path=require('path')


const app=express()

const port=process.env.PORT || 3000

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( __dirname, 'views' ) );

app.use( express.static( path.join( __dirname, 'public' ) ) );

app.use( express.json() );
app.use( express.urlencoded() );

app.use( indexRouter );
app.use( '/workshops', workshopRouter );
app.use( '/api/workshops', apiWorkshopRouter );


app.use( pageNotFoundHandler );
app.use(genericErrorHandler)

app.listen(port,(err)=>{
    if(err){
        console.log(err.message)
        return
    }
    console.log(`listening on ${port}`)
})