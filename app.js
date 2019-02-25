var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function(req, res){
   res.render("landing"); 
});

app.get("/pricing",function(req, res){
   res.render("pricing"); 
});

app.get("/cv",function(req, res){
   res.render("cv"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("portfolio app has started");
});