const mongoose = require("mongoose")
const elephantSchema = mongoose.Schema({
name: String,
age:
{
    type: Number,
    min: [3,"The Elephant age must be between or equal to  3"],
    max: [11,"The elephant Age cannot be exceed 11"],
    required:[true, 'elephant age is required']
},
bread: String
})
module.exports = mongoose.model("elephant", elephantSchema)