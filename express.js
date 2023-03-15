var express = require("express");
var app= express();

app.get("/", function(req, res){
    res.send("Seja bem-vindo ao meu site!")
});

app.get("/sobre", function(req, res){
    res.send("Minha página sobre")
});
app.get("/blog", function(req, res){
    res.send("Meu blog")
});

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
});
 