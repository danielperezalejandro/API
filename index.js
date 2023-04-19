var express=require('express');
var app=express();

app.get('/', (req, res)=>
    res.send("Hola Mundo")
);
app.get('/aboutme', function(req, res){
    res.send("aboutme perro");
})
app.get('/products', function(req, res){
    res.json({
        "name":"Teclado",
        "precio": 22,
        "category": "Tecnology"
    });
}) 

app.listen(3000, function(){
    console.log("aplicacion a escuchar")
})
