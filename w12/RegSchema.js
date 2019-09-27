var mongoose = require('mongoose')
var Schema = mongoose.Schema


var registerSchema = Schema({
    name: {
        type: String,
        unique: false
    },
    regNo: {
        type: Number,
        unique: true,
        
    },
    dob: {
        type: Date,
        unique: false
    }

},{retainKeyOrder:true})
var Register = mongoose.model('Register',registerSchema)
module.exports= Register