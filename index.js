const express = require ("express");
const Neeraj =  express();
Neeraj.use(express.json());
Neeraj.get("/" , (request, response) => 
{
    return response.json({hello: "hello people"});

});

Neeraj.get("/b1/:userid", (request, response)=>{
    const users=[
        {
        id:1,
        name: "Neeraj",
    },
{
    id:2,
    name: "Raj",
    },
{
    id:3,
    name: "Sham",
    },
];

const userID = request.params.userid;
const getUser= users.filter((user) => user.id === parseInt(userID));

    return response.json({user: getUser[0]});
});
Neeraj.listen(3000, ()=> console.log("hey Neeraj, This is running!!"));
