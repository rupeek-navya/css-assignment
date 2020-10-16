import MovieClass from './Movie.js'

export default class Sequel extends MovieClass{
    constructor(name,cast,yearOfRelease,boxOfficeCollection,earlierMovies){
        super(name,cast,yearOfRelease,boxOfficeCollection)
        this.earlierMovies=earlierMovies
    }
    getLifetimeEarnings(){
        let collection=0,i=0
        for(i=0;i<this.earlierMovies.length;i++)
            collection+=this.earlierMovies[i].boxOfficeCollection
        return collection+this.boxOfficeCollection
    }
}
// movie1=new MovieClass('m1',['hj','gvhb'],2012,200)
// movie2=new MovieClass('m2',['hjio','gfhgj'],2017,20000)
// movie1.addToCast('ghey')
// movie2.addToCollection(30)
// console.log(movie2)