const axios = require("axios");


async function getCommentersEmailIds( username ) {
    let det;
    det=await axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`)
    det =await axios.get(`https://jsonplaceholder.typicode.com/users/${det.data[0].id}/posts`)
    det=await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${det.data[0].id}`)
        
    for(i=0;i<det.data.length;i++)
        console.log(det.data[i].email)
}

getCommentersEmailIds('Bret')

