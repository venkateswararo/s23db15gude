const mongoose = require("mongoose")
const elephantSchema = mongoose.Schema({
name: String,
age: Number,
bread: String
})
module.exports = mongoose.model("elephant", elephantSchema)