import SequelClass from './Sequel.js'
import MovieClass from './Movie.js'

const movie1=new MovieClass('m1',['hj','gvhb'],2012,200)
const movie2=new MovieClass('m2',['hjio','gfhgj'],2017,20000)
const s1=new SequelClass('m3',['fgh','gh'],2012,30,[movie1,movie2])

console.log(s1)
const val=s1.getLifetimeEarnings()
console.log(val)