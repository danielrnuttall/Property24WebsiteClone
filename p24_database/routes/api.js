const express = require("express")
const router = express.Router()

const Customer = require("D:/Ziao/p24_clone/p24_database/models/customers")
const Agent = require("D:/Ziao/p24_clone/p24_database/models/agents")
const Property = require("D:/Ziao/p24_clone/p24_database/models/properties")


//get list of customers from db
/*router.get("/customers", async function(req,res){
    try{
        var properties = await Property.find()
        res.send(properties)

    } catch (error) {
        res.send({error: error.message})
    }
    })*/

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

    //update a customer in database
/*router.put("/customers/:id", function(req,res){
    res.send({type: 'PUT'})
     })

     //delete a customer in database
router.delete("/customers/:id", function(req,res){
    res.send({type: 'DELETE'})
    })*/







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
router.get("/properties", function(req,res){
    //return all properties
    Property.find({}).then(function(properties){
        res.send(properties)
    })
    })

//add new property to database
router.post("/properties", function(req,res){
   // console.log(req.body)
   var property = new Property(req.body)
    property.save();
    res.send({
        type: 'POST',
        name: req.body.name,
        location: req.body.location,
        imageURL:  req.body.imageURL,
        price: req.body.price
    })
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