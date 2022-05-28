const productSchema = require('../../models/productSchema');

const popularproducts = async (req, res, next) => {
    let productsList;
    try {
        productsList = await productSchema.find().sort({ "user.rating": -1 }).limit(6);  
    }catch(err){
        console.log(err);
    }

    
    res.status(200).json({ 
        status: "Success",
        data: productsList
    });
}

module.exports = popularproducts;