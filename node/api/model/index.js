const mongoose = require('mongoose')
const itemSchema = new mongoose.Schema({
    name:String,
    img:Array
})
const itemModel = mongoose.model('test',itemSchema)
module.exports = itemModel