const products = require('./products');
const productSchema = require('../models/productSchema');

const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();
const URI = process.env.DB_URI.replace('DB_USER', process.env.DB_USER).replace('DB_PASSWORD',process.env.DB_PASSWORD).replace('DB_NAME',process.env.DB_NAME);
mongoose.connect(URI, {
    useNewUrlParser : true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected to mongo.")
}).catch((err)=>{
    console.log("Error Connecting mongo..", err.message)
});

products.forEach((product)=>{
    const savedData = new productSchema({
        name: product.name,
        description: product.description,
        image: product.image,
        price: product.price,
        category: product.category,
        quantity: product.quantity,
    });
    savedData.save().then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log("Error while saving data", err);
    })
})