const sum=(x,y)=>{
    return y+x
}
f1=sum.bind(null,10)
console.log(f1())
f2= sum.bind(null,20,10)
console.log(f2())