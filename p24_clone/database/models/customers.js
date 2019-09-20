const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({

    firstname: String,

    lastname: String,

    email: String,

    password: String
})

mongoose.model('Customer', customerSchema)

//module.exports = Customer