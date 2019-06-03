const mongoose = require('mongoose')
const schema = mongoose.Schema

const paymentDetailsModel = new schema({
    transactionId: { type: String, required: true} ,
    userName: { type: String, required: true},
    paymentMode: { type: String, required: true},
    amount: { type: Number, required: true }
})

module.exports = mongoose.model('PaymentTransaction', paymentDetailsModel)