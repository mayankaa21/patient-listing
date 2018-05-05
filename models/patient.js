var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
    fname: {type: String, required:true},
    lname: {type: String, required: true},
    dob: {type:String, required:true},
    age: {type:Number, required:true},
    gender:{type:String, required:true},
    cont:{type:Number, required:true},
    pinfo:{type:String}
});


module.exports = mongoose.model('Patient', schema);