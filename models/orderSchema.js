const decorItemSchema = require('./decorItemSchema')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderItemSchema = new Schema({
    decorItem: decorItemSchema,
    qty: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

orderItemSchema.virtual('orderItemPrice').get(function () {
    return this.qty * this.decorItem.price
})

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderItems: [orderItemSchema],
    isPaid: { type: Boolean, default: false },
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

orderSchema.virtual('orderTotal').get(function () {
    return this.orderItems.reduce((total, item) => total + item.orderItemPrice, 0)
})

orderSchema.virtual('orderQty').get(function () {
    return this.orderItems.reduce((total, item) => total + item.qty, 0)
})

orderSchema.virtual('orderId').get(function () {
    return this.id.slice(-6).toUpperCase()
})

orderSchema.statics.getCart = function (userId) {
    return this.findOneAndUpdate(
        { user: userId, isPaid: false },
        { user: userId },
        { upsert: true, new: true }
    )
}

// Instance method for adding an item to a cart (unpaid order)
orderSchema.methods.addItemToCart = async function (itemId) {
    // 'this' keyword is bound to the cart (order doc)
    const cart = this
    // Check if the item already exists in the cart
    const orderItem = cart.orderItems.find(orderItem => orderItem.decorItem._id.equals(itemId))
    if (orderItem) {
        // It already exists, so increase the qty
        orderItem.qty += 1
    } else {
        // Get the item from the "catalog"
        // Note how the mongoose.model method behaves as a getter when passed one arg vs. two
        const decorItems = mongoose.model('DecorItem')
        const decorItem = await decorItems.findById(itemId)
        cart.orderItems.push({ decorItem })
    }
    // return the save() method's promise
    return cart.save()
}

// Instance method to set an item's qty in the cart
orderSchema.methods.setItemQty = function (itemId, newQty) {
    // this keyword is bound to the cart (order doc)
    const cart = this
    // Find the line item in the cart for the menu item
    const orderItem = cart.orderItems.find(orderItem => orderItem.decorItem._id.equals(itemId))
    if (orderItem && newQty <= 0) {
        // Calling deleteOne, removes the orderItem subdoc from the cart.orderItems array
        orderItem.remove()
    } else if (orderItem) {
        // Set the new qty - positive value is assured thanks to prev if
        orderItem.qty = newQty
    }
    // return the save() method's promise
    return cart.save()
}

module.exports = mongoose.model('Order', orderSchema)