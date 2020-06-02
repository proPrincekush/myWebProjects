var express = require("express");
var bodyparser = require("body-parser");
var request = require("request");
 var app = express();


 var items = [];


 app.use(bodyparser.urlencoded({extended:true}));
 app.use(express.static("public") )
 app.listen(3000,function(req,res){
    console.log("server started at port 3000. ");
    
});
 app.set('view engine','ejs');

 var day = "prince";
 app.get("/",function(req,res){
//   res.sendFile(__dirname+"/list.ejs");
     var today = new Date();
     var day = "";
    // console.log(today);

var Days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday",]
  // day = Days[today.getDay()]; 
  
   var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   day = today.toLocaleDateString("en-US", options)
   console.log(today.toLocaleDateString("en-US", options));



// EJS 
res.render('list',{kindOfDay:day,tasks:items});

 });

 app.post("/", function(req,res){
    console.log(req.body.task);
   var   dailyTask = req.body.task;
   items.push(dailyTask);
  res.redirect("/");
   
    
})
 
