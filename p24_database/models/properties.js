
const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'A name is required']
    },

    location: {
        type: String,
        required: [true, 'A location is required']
    },

    imageURL: {
        type: String,
        required: [true, 'A URL is required']
    },

    price: {
        type: String,
        required: [true, 'A price is required']
    }
})

const Property = mongoose.model('Property', propertySchema)

module.exports = Property