var hour=(new Date()).getHours()
if(hour>=5 && hour<12){
    console.log('Good Morning')
}
else if(hour>12 && hour<6){
    console.log('Good Afternoon')
}
else
console.log('Good Evening')