const mongoose = require('mongoose')
const decorItemSchema = require('./decorItemSchema')
module.exports = mongoose.model('DecorItem', decorItemSchema)