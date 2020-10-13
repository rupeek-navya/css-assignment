const sumSquares=(arr)=>{
    newarr=[]
    for(i=0;i<arr.length;i++){
        newarr[i]=arr[i]*arr[i]
    }
    return newarr
}
console.log(sumSquares([1,2,3,8,9]))