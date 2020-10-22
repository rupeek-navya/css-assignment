const {getValue,setValue}=require('./4-utilities')

console.log(getValue('./package.json','scripts'))

console.log(setValue('./package.json','author','navya'))