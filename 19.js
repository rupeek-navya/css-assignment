john={
    name:'john',
    age:21
}
jane={
    name:'jane',
    age:18
}
console.log(john['age'])
jane.age=20;
console.log(jane)
j_address={
    'first line':"3rd street",
     city:'vijayawada'
}
john.address=j_address
console.log(john.address.city)
john.spouse=jane
jane.spouse=john
jane.emailids=[
    'john@Speec.com',
    'johnj.gmail.com'
]
console.log(jane['emailids'][1])
jane['emailids'][1]='john@gmail.com'
console.log(jane.emailids[1])
jane.emailids[2]='janee@gmail.com'

console.log(john)
jane.celebrateBirthday=john.celebrateBirthday=function(){
    this.age++
}
john.celebrateBirthday()
// console.log(john)
console.log(john)

