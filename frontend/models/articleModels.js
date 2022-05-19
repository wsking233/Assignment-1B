const mongoose = require('mongoose')
/* Create the Schema for database */
const articleTemplate = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('articleTable', articleTemplate)