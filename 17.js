const exponentFactory=(val)=>{
    const square=x=>x*x
    const cube=x=>x*x*x
    const same=x=>x
    if(val===2)
    return square
    else if(val===3)
    return cube
    else
    return same
}
fn=exponentFactory(2)
console.log(fn(5))