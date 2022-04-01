

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

  console.log(fName,lName,email);
})

app.listen(3000, function(){
  console.log("test");
})
