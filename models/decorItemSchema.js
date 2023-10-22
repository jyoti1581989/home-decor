const Schema = require('mongoose').Schema

const decorItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    timestramps: true
})

module.exports = mongoose.model('DecorItem', decorItemSchema)