var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema= Schema({
    userName:{
        type:String,
    unique:false    },
    passWord:{
        type:Number,
        unique:true
    }
})
var User=mongoose.model('User',userSchema)
module.exports=User