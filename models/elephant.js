const mongoose = require("mongoose")
const elephantSchema = mongoose.Schema({
name:
{
    type: String,
    min: [5,"The Elephant name must be between or equal to  5"],
    max: [40,"The elephant Name cannot be exceed 40"],
    required:[true, 'elephant name is required']
},
age:
{
    type: Number,
    min: [3,"The Elephant age must be between or equal to  3"],
    max: [11,"The elephant Age cannot be exceed 11"],
    required:[true, 'elephant age is required']
},
bread: 
{
    type: String,
    min: [7,"The Elephant bread must be between or equal to  7"],
    max: [50,"The elephant Bread cannot be exceed 50"],
    required:[true, 'elephant bread is required']
},
})
module.exports = mongoose.model("elephant", elephantSchema)