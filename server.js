var express=require('express');
var app=express();

app.get('/',function(req,res)
{

res.send("hello world");

});
app.get('/about',function(req,res)
{

res.send("hello abput");

});

app.listen(3000);


