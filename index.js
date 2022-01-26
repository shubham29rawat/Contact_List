const express = require('express');
const path = require("path");
const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views') );
app.use(express.urlencoded());
app.use(express.static('assets'));



// //middleware 1 
// app.use(function(req, res, next){
//     req.myName = "shubham"
//     // console.log("middlewarw 1 is created");
//     next();
// });
// //middleware 1 
// app.use(function(req, res, next){
//     console.log("my name is", req.myName);
//     next();
// });


var contactList = [
    {
        name : "shubham",
        phone: "1111111111"
    },
    {
        name: "tony",
        phone: "999999990"
    },
    {
        name: "matt",
        phone: "922223990"
    }
]


app.get('/',function(req, res){
    
    // console.log(__dirname)
    // res.send("cool, it is running")
    return res.render("home", {

        title:"My contacts list",
        contacts_list: contactList
    
    });

})
app.get('/practice',function(req, res){
    // console.log(__dirname)
    // res.send("cool, it is running")
    return res.render("practice", {

        title:"this practice file"
    
    });

})
/// for deleting a contact 
app.get('/delete-contact/:phone', function(req, res){
    console.log(req.params);
    let phone = req.params.phone;
    console.log(req.params.phone)
//get the query from url
    let contactIndex = contactList.findIndex( contact => contact.phone == phone);
    if(contactIndex != -1){
        contactList.splice(contactIndex, 1);
    }
        return res.redirect('back')
})



app.listen(port, function(err){

    if(err){
        console.log("error", err);
        
    }console.log("express is running on port", port);
});



app.post('/create-contact',function(req, res){
    
//   contactList.push({
//       name: req.body.name,
//       phone: req.body.phone

//   })
contactList.push(req.body);
  return res.redirect("back")

})