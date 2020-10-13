var phones = [
    { name : 'Samsung Galaxy S10+ Plus', price: 620, type: 'refurbished', manufacturer: 'Samsung' 
    },
    { name : 'Apple iPhone 7 Plus', price: 450, type: 'refurbished', manufacturer: 'Apple' },
    { name : 'One Plus 6', price: 430, type: 'new', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone Xs', price: 910, type: 'new', manufacturer: 'Apple' },
    { name : 'One Plus 7', price: 430, type: 'refurbished', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone 8 Plus', price: 610, type: 'new', manufacturer: 'Apple' },
    ];

names=phones.map((item)=>(
    item.name
))
console.log(names)
new_phones=phones.filter((item)=>{
    if(item.type==='new')
    return true
})
console.log(new_phones)

less_price=phones.filter((item)=>{
    if(item.price<440)
    return true
})
names=less_price.map((item)=>(item.name))
console.log(names)