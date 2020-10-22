const url=require('url')
const http=require('http')

const server=http.createServer((req,res)=>{
    const parsedAddress = url.parse( req.url, true );
    if(parsedAddress.pathname=='/add'){
        res.statusCode=200
        x=parseInt(parsedAddress.query.x);
        y=parseInt(parsedAddress.query.y);
        res.end(`${x+y}`)
    }
    else if(parsedAddress.pathname=='/multiply'){
        res.statusCode=200
        x=parseInt(parsedAddress.query.x);
        y=parseInt(parsedAddress.query.y);
        res.end(`${x*y}`)
    }
    else if(parsedAddress.pathname!='/favicon.ico'){
        res.statusCode=401
        res.end()
    }
})

server.listen(3000)