const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({

    name: String,

    location: String,

    imageUrl: String,

    price: String
})

mongoose.model('Property', propertySchema)

//module.exports = Customer