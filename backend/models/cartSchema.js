const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
    userid: {type: String, required:true},
    cartitems : [{itemid: String, totalno: Number, price: Number, totalprice: Number, ordered: {type: Boolean, default: false}, date: {type: Date, default: Date.now}}]
});

module.exports = mongoose.model('Cart', cartSchema);