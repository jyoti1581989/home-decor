const Schema = require('mongoose').Schema

const orderItemSchema = new Schema({
    decorItem: {
        type: Schema.Types.ObjectId,
        ref: "DecorItem",
        required: true
    }
}, {
    timestamps: true
})

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderItem: [orderItemSchema],

    total: {
        type: Number
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)