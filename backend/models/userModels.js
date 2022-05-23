const mongoose = require('mongoose')
/* Create the Schema for database */
const userTemplate = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('userTable', userTemplate)