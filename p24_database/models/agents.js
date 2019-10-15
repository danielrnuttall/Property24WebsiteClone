const mongoose = require('mongoose')

const agentSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: [true, 'A firstname is required']
    },

    lastname: {
        type: String,
        required: [true, 'A lastname is required']
    },

    email:  {
        type: String,
        required: [true, 'An email is required']
    },

    password: {
        type: String,
        required: [true, 'A password is required']
    }
})

const Agent = mongoose.model('Agent', agentSchema)

module.exports = Agent
