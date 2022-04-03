
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
  apiKey: "Filler for real api key",
  server: "put actual server here"
});

app.post("/", function(req,res){
  var fName = req.body.firstName;
  var lName = req.body.lastName;
  var email = req.body.email;

  const listId = "put your list id here";
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

app.listen(process.env.PORT||3000, function(){
  console.log("test");
});

app.get("/failure", function(req, res){
  res.redirect("/");
});
