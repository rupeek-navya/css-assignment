const sumModifiedValues=(x,y,transform)=>{
    return transform(x)+transform(y)
}
const square=x=>x*x
const cube=x=>x*x*x
console.log(sumModifiedValues(2,4,square))