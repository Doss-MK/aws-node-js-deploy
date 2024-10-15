const express = require("express");
const app = express();

app.get('/api/get',(req,res) => {
    res.send({message:"hello back to nodejs"})
})

app.get('/api/get_user_details',(req,res) => {
    res.send({
        user:{
            name:"satyam",
            age:22,
            contact:12254
        },env:process.env.NAME
    })
});


app.listen(8100,() => {
    console.log("listening to 8100");
})