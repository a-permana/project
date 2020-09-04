const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'motor'
});

mysqlConnection.connect((err) => {
    if (!err)
    console.log('DB connection succeded.');
    else
    console.log('DB connection failed \n Error : ' +JSON.stringify(err, undefined, 2));
});

app.listen(3001,()=>console.log('Express server is running at port no : 3001'));


app.get('/brand_tb',(res,req)=>{
    mysqlConnection.query('SElECT * FROM brand_tb',(err, rows, fields)=>{
        if(!err)
        console.log(rows);
        else
        console.log(err);
    })
});