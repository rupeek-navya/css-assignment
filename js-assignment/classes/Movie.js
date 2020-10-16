export default class Movie{
    constructor(name,cast,yearOfRelease,boxOfficeCollection){
        this.name=name
        this.cast=cast
        this.yearOfRelease=yearOfRelease
        this.boxOfficeCollection=boxOfficeCollection
    }
    addToCast=(newMember)=>{
        this.cast.push(newMember)
    }
    addToCollection=(amount)=>{
        this.boxOfficeCollection=this.boxOfficeCollection+amount
    }
}
// movie1=new Movie('m1',['hj','gvhb'],2012,200)
// movie2=new Movie('m2',['hjio','gfhgj'],2017,20000)
// movie1.addToCast('ghey')
// movie2.addToCollection(30)
// console.log(movie2)

