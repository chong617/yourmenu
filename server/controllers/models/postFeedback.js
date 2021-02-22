const mongoose = require('mongoose')

var PostFeedback = mongoose.model('PostFeedback',{
    lastname: {type:String},
    firstname: {type:String},
    telnum:{type:Number},
    email:{type:String},
    agree:{type:Boolean},
    contactType:{type:String},
    message:{type:String}
})

module.exports = {PostFeedback}