const sum=(args=>{
    let res=0
    for(i=2;i<args.length;i++){
        res+=parseInt(args[i])
    }
    return res
})

// arr=[1,2,3]
// newarr=arr.map(val=>val+2)
// console.log(newarr)
// module.exports={
//     sum
// }

// console.log(__filename)
// console.log(__dirname)
// console.log(sum(process.argv))

// process.stdout.write('hello from starem\n')

// process.stdout.write('who r u\n')

// process.stdout.on('data',chunk=>{
//     process.stdout.write(`so u r ${chunk}`)
// })
// console.log(process.env.TERM_PROGRAM)
// console.log(process.env.TERM_PROGRAM_VERSION)
// console.log(process.env.PATH)

if(process.env.NODE_ENV==='development'){
    console.log('its development')
}
else{
    console.log('its production')
