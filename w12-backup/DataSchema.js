var mongoose = require('mongoose')
var Schema = mongoose.Schema


var studentSchema = Schema({
    name: {
        type: String,
        unique: false
    },
    rollNo: {
        type:Number ,
        unique: true
    },
    dob: {
        type: Date,
        unique: false
    }

})
var Student = mongoose.model('Student',studentSchema)
module.exports=Student