const addTo=(x)=>{
    return func=(y)=>{
        return x+y
    }
}
var addTo10 = addTo( 10 );
console.log( addTo10( 5 ) ); // prints 15
console.log( addTo10( 7 ) ); // prints 17
var addTo20 = addTo( 20 );
console.log( addTo20( 5 ) ); // prints 25
console.log( addTo20( 7 ) );
console.clear()