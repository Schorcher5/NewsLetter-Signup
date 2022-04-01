
const mailchimp = require("@mailchimp/mailchimp_marketing");
const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(__dirname));

app.get("/", function(req,res){
  res.sendFile(__dirname+"/signup.html");
})

app.post("/", function(req,res){
  var fName = req.body.firstName;
  var lName = req.body.lastName;
  var email = req.body.email;



})

app.listen(3000, function(){
  console.log("test");
})

// API Key
// eb3f8a5f0b617c41dde54b958aa7734d-us14
// list id: f7165473eb
