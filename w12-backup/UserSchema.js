var mongoose = require('mongoose')
var Schema = mongoose.Schema


var userSchema = Schema({
    userName: {
        type: String,
        unique: true
    },
    passWord: {
        type: String,
        unique: false
    }

})
var User = mongoose.model('User',userSchema)
module.exports=User