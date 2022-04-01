

const express = require("express");
const request = require("request");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(3000, function(){
  console.log("test");
})
