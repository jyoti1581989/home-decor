const Schema = require('mongoose').Schema

const orderItemsSchema = new Schema({
    decorItem: {
        type: Schema.Types.ObjectId,
        ref: "DecorItem",
        required: true
    },
    qty: {
        type: Number,
        default: 1
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
    orderItems: [orderItemsSchema],

    total: {
        type: Number
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)