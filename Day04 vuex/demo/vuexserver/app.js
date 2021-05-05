const express = require('express');
const cors = require('cors');

const server =express();

server.use(cors({
    origin:['http://127.0.0.1:8080','http://localhost:8080']
}));

server.listen(3000);

server.get('/data',(req,res)=>{
    let obj={
        id:9,
        productName:'苹果18,黑色',
        salePrice:5899.00
    };
    res.send(obj);
})