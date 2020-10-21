db.getCollection('restaurants').find({},{restaurant_id:1,borough:1,cuisine:1,name:1})

db.getCollection('restaurants').find({},{restaurant_id:1,borough:1,cuisine:1,name:1,_id:0})

db.getCollection('restaurants').find({},{_id:0,restaurant_id:1,name:1,borough:1,"address.zipcode":1})

db.getCollection('restaurants').find({borough:'Bronx'})

db.getCollection('restaurants').find({borough:'Bronx'}).limit(5)

db.getCollection('restaurants').find({borough:'Bronx'}).skip(5).limit(5)

db.restaurants.find({
    'grades.score':{
        $gt:90
    }
})

db.restaurants.find({
    grades:{
        $elemMatch:{
          "score":{  
         $gt:80,
        $lt:100
    }}}
})

db.restaurants.find({
    'address.coord':{
        $lt:-95.754168
    }
})

db.restaurants.find({
    $and:[
        {'address.coord':{
            $lt:-65.754168
        }},
        {'grades.score':{
            $gt:70
        }},
        {cuisine:{
            $ne:'American'
        }}
    ]
})