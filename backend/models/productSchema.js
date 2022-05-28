const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {type: String, required:true},
    description: {type: String, required:true},
    image: {type: String, required:true},
    price: {type: Number, required: true},
    category: {type: String, required:true},
    quantity: {type: String, required:true},
    user : [{userid: String, review: String, rating: Number, date: {type: Date, default: Date.now}}]
});

module.exports = mongoose.model('productschema', productSchema);