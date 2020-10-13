const containsValue=(arr,val)=>{
    for(i=0;i<arr.length;i++){
        if(val===arr[i])
        return true
    }
    return false
}
console.log(containsValue([1,2,3,8,9],31))
