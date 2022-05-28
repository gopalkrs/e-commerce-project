const productSchema = require('../../models/productSchema');

const pricefilter = async (req, res, next) => {
    const category = req.query.category;
    let productsList;
    try {
        productsList = await productSchema.find({ category: category}).sort({ price: 1 });
    }catch(err){
        console.log(err);
    }

    
    res.status(200).json({ 
        status: "Success",
        data: productsList
    });
}

module.exports = pricefilter;