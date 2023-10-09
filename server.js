//Writing my first Express JS code.

const express = require("express");

const app = express();

app.get("/",function(request,response){
    response.send("<h1>Hello brother</h1>");
})

app.listen(3000,function(){
    console.log("Server started in 3000.");
})
