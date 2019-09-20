const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/p24_database', {useNewUrlParser: true}, (err) =>{
    if(!err) { console.log('MongoDB Connection successful.')}
});

require('./customers');