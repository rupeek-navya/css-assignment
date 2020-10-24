//1
db.getCollection('restaurants').find({})
//2
db.getCollection('restaurants').find({},{restaurant_id:1,borough:1,cuisine:1,name:1})
//3
db.getCollection('restaurants').find({},{restaurant_id:1,borough:1,cuisine:1,name:1,_id:0})
//4
db.getCollection('restaurants').find({},{_id:0,restaurant_id:1,name:1,borough:1,"address.zipcode":1})
//5
db.getCollection('restaurants').find({borough:'Bronx'})
//6
db.getCollection('restaurants').find({borough:'Bronx'}).limit(5)
//7
db.getCollection('restaurants').find({borough:'Bronx'}).skip(5).limit(5)
//8
db.restaurants.find({
    'grades.score':{
        $gt:90
    }
})
//9
db.restaurants.find({$and : [ {"grades.score" : {"$gt" : 90}} , {"grades.score" : {"$lt" : 100} }]});
//10
db.restaurants.find({
    'address.coord':{
        $lt:-95.754168
    }
})
//12
db.restaurants.find({
    'address.coord':{
        $lt:-65.754168
    },
    'grades.score':{
        $gt:70
    },
    'cuisine':{
        $ne:'American '
    }
})
//13
db.restaurants.find({
    "cuisine": {$ne:"American "},
    "grades.grade": "A",
    "borough": {$ne:"Brooklyn"}
}).sort({"cuisine":-1});

//14
db.restaurants.find({
    name:{
        $regex:/^Wil/}
},{name:1,borough:1,cuisine:1});

//15
db.restaurants.find({
    name:{
        $regex:/ces$/}
},{name:1,borough:1,cuisine:1});
//16
db.restaurants.find({
    name:{
        $regex:/Reg/}
},{name:1,borough:1,cuisine:1});

//17

db.getCollection('restaurants').find({
    borough:'Bronx',
    $or:[
    {cuisine:"American "},
    {cuisine:"Chinese"}
    ]
})
//18
db.getCollection('restaurants').find({
    borough:{
        $in:['Staten Island','Queens','Bronxor Brooklyn']
    }
},{name:1,borough:1,cuisine:1})
//19
db.getCollection('restaurants').find({
    borough:{
        $nin:['Staten Island','Queens','Bronxor Brooklyn']
    }
},{name:1,borough:1,cuisine:1})
//20
db.getCollection('restaurants').find({
    "grades.score":{$lte:10}
},{name:1,borough:1,cuisine:1})
//21
db.getCollection('restaurants').find({
    $or:[
    {cuisine:{$nin:["American ","Chinese"]}},
    {name:{$regex:/^Wil/}}
    ]
},{name:1,borough:1,cuisine:1})
//22

db.getCollection('restaurants').find({
    "grades.score":11,
    "grades.grade":"A",
    "grades.date":ISODate("2014-08-11T00:00:00Z")

},{name:1,grades:1});

db.getCollection('restaurants').find({
    "grades":{$elemMatch:{
        "score":11,
        "grade":"A",
        "date":ISODate("2014-08-11T00:00:00Z")
    }}
},{name:1,grades:1});
//24
db.getCollection('restaurants').find({
    "address.coord.1":{
        $gt:42,
        $lt:52
    }
},{name:1,address:1,coord:1});
//25
db.getCollection('restaurants').find({}).sort({name:1});
//26
db.getCollection('restaurants').find({}).sort({name:-1});
//27
db.getCollection('restaurants').find({}).sort({name:1},{borough:-1});
//28
db.getCollection('restaurants').find({
    "address.street":{
        $exists:true
    }
})
//29
db.getCollection('restaurants').find({
    "address.coord":{
        $type:"double"
    }
})
//30
db.getCollection('restaurants').find({
    "grades.score":{
        $mod:[7,0]
    }
})
//31
db.restaurants.find({
    name:{
        $regex:/mon/,$options:'i'}
},{name:1,borough:1,cuisine:1,coord:1});
//32
db.restaurants.find({
    name:{
        $regex:/^Mad/}
},{name:1,borough:1,cuisine:1,coord:1});
    
    

