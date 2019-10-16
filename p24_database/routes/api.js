 const express = require("express")
 const router = express.Router()

 const Customer = require("../models/customers")
 const Agent = require("../models/agents")
 const Property = require("../models/properties")
var countViews = 0;
var dateTime = new Date();
var dateMinutes = dateTime.getMinutes();
//console.log(dateTime.getHours());

// router.get("/test", async function(req,res){
//     try{
        
//         res.send({
//             name:"asif",
//             schoool:"123"
//         });

//     } catch (error) {
//         res.send({error: error.message})
//     }
//     });


 //get list of customers from db
// /*router.get("/customers", async function(req,res){
//     try{
//         var properties = await Property.find()
//         res.send(properties)

//     } catch (error) {
//         res.send({error: error.message})
//     }
//     })*/

//add new customer to database 
router.post("/customers", function(req,res){
    var customer = new Customer(req.body)
    customer.save();
    res.send({
        type: 'POST',
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email:  req.body.email,
        password: req.body.password
    })
    })

//     //update a customer in database
// /*router.put("/customers/:id", function(req,res){
//     res.send({type: 'PUT'})
//      })

//      //delete a customer in database
// router.delete("/customers/:id", function(req,res){
//     res.send({type: 'DELETE'})
//     })*/







//Now we do agents
/*router.get("/agents", function(req,res){
    res.send({type: 'GET'})
    })*/

//add new agent to database
router.post("/agents", function(req,res){
    //console.log(req.body)
    var agent = new Agent(req.body)
    agent.save();
    res.send({
        type: 'POST',
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email:  req.body.email,
        password: req.body.password
    })
    })

    //update an agent in database
/*router.put("/agents/:id", function(req,res){
    res.send({type: 'PUT'})
     })

     //delete an agent in database
router.delete("/agents/:id", function(req,res){
    res.send({type: 'DELETE'})
    })*/







//Now we do properties

//Method below checks number of views per hour:
function checkViews(firstTime, currentTime){
    countViews++;

    if ((currentTime-firstTime) < 60)
    {
        if (countViews > 4)
        {
            return false;
        }
    }
    else{
        countViews = 0;
        return true;
    }
}
//get all properties
router.get("/properties", function(req,res){
    //return all properties
    Property.find({}).then(function(property){
        res.send(property)
    })
    })

//get a specific property by ID
router.get("/properties/:id", function(req, res){
    var currDate = new Date();
    var currMinutes = currDate.getMinutes();
    

    if (checkViews(dateMinutes,currMinutes) == false)
    {
        res.send("Cannot view more than 4 properties per hour. Please try again later.")
    }
    else
    {
    Property.findById({_id:req.params.id}).then(function(property){
        res.send(property)
        count++;
    })
    
    }
    
    
    })

//add new property to database
router.post("/properties", function(req,res){
   // console.log(req.body)
   //var property = new Property(req.body)
   // property.save();
    const new_prop = {
        name: req.body.name,
        location: req.body.location,
        imageURL:  req.body.imageURL,
        price: req.body.price
    }
    /*res.send({
        
        name: req.body.name,
        location: req.body.location,
        imageURL:  req.body.imageURL,
        price: req.body.price
    })*/

    Property.create(new_prop).then((x)=> {
        
        res.send(x);
        //res.send("Property has been added")
    })
    //res.send(property)
    })

    //update a property in database
router.put("/properties/:id", function(req,res){
    Property.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Property.findOne({_id:req.params.id}).then(function(property){
            res.send(property)
        })
    })
    
     })

     //delete a property in database
router.delete("/properties/:id", function(req,res){
    Property.findByIdAndRemove({_id:req.params.id}).then(function(property){
        res.send(property)
    })
    res.send({type: 'DELETE'})
    })



     module.exports = router