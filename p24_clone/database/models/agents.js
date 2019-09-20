
require('./models/db');
const mongoose = require('mongoose')

const agentSchema = new mongoose.Schema({

    firstname: String,

    lastname: String,

    email: String,

    password: String
})

const Agent = mongoose.model('Agent', agentSchema)

//module.exports = Agent