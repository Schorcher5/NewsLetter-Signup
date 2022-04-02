
const mailchimp = require("@mailchimp/mailchimp_marketing");
const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(__dirname));

app.get("/", function(req,res){
  res.sendFile(__dirname+"/signup.html");
});

mailchimp.setConfig({
  apiKey: "eb3f8a5f0b617c41dde54b958aa7734d-us14",
  server: "us14"
});

app.post("/", function(req,res){
  var fName = req.body.firstName;
  var lName = req.body.lastName;
  var email = req.body.email;

  const listId = "f7165473eb";
  const user = {
    firstName:fName,
    lastName:lName,
    email:email
  };

  async function run(){
    const response = await mailchimp.lists.addListMember(listId,{
      email_address: user.email,
      status: "subscribed",
      merge_fields: {
        FNAME: user.firstName,
        LNAME: user.lastName
      }
    });

    res.sendFile(__dirname+"/success.html");
    console.log("User has been added to the mailing list");

  }run().catch(e => res.sendFile(__dirname+"/failure.html"));

});

app.listen(3000, function(){
  console.log("test");
});
