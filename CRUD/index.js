const express = require('express');
const fs = require('fs');

const app = express();

const PORT = 7000;

app.get('/user',(req, res)=>{
    res.send("Hi")
})

app.get('/login',(req, res)=>{
    res.send("Login Hi!!!!")
})
app.listen(PORT, ()=>{
    console.log(`App run at Port ${PORT}`);
})