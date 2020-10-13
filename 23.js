var numbers = [ 5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29 ];
numbers.sort(function(x,y){
    return x<y? -1:1
})
console.log(numbers)
numbers.sort(function(x,y){
    if(x<y)
    return 1
    else if(x===y)
    return 0
    else
    return -1
})
console.log(numbers)
numbers = [ 5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29 ];
numbers.push(37)
numbers.pop()
numbers.pop()
console.log(numbers)
numbers.splice(3,2,'seven','eleven')
console.log(numbers)
console.log(numbers.indexOf(23))
console.log(numbers.indexOf(41))