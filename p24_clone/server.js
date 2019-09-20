require('./database/models/db')

const express = require('express')

const app = express()


app.listen(3000, () => {
    console.log('Express server started at port: 3000');
})