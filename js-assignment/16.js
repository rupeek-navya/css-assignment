const sumArray=(arr,method)=>{
    result=0
    for(i=0;i<arr.length;i++){
        result+=method(arr[i])
    }
    return result
}
const square=x=>x*x
console.log(sumArray([1,2,3],square))