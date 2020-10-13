var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
days.map((item)=>{
    console.log(item)
})
str_length=days.map((item)=>(
    item.length
))
console.log(str_length)

newdays1 =days.filter((item)=>{
    if(item[0]>='S' && item[0]<='Z')
    return true
    else
    return false
})
console.log(newdays1)

newdays2=days.filter((item)=>{
    if(item.length===6)
    return true
    else
    return false
})
console.log(newdays2)