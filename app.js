//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.set("view engine", "ejs"); 
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var items = [];
var workItems =[];

app.get("/", function(req, res){
        let day = date;
       res.render("list", {headerName: day, newItems: items});
});

app.post("/", function(req, res){
    let item = req.body.newItem;
  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }
 
});


app.get("/work", function(req, res){
res.render("list", {headerName: "Work Items", newItems: workItems});
});

app.post("/work", function(req, res){
    var workItem = req.body.newItem;
    workItems.push(workItem);
    res.redirect("/work");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});