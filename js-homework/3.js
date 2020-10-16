const sum=(...args)=>{
    value=0
    for(i=0;i<args.length;i++){
        value=value+args[i]
    }
    return value
}

var result = sum( 1, 2, 3, 4 );
console.log( result ); // prints 10

var result = sum( 1, 2, 3, 4, 5 );
console.log( result ); // prints 15