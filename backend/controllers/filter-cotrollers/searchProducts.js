const productSchema = require('../../models/productSchema');

const searchProducts = async (req, res, next) => {
    const searchtext = req.query.text;

    if(!searchtext){
        return res.status(200).json({ 
            status: "Success",
            data: []
        });
    }

    let productsList;
    try {
        productsList = await productSchema.find({ name: {$regex: searchtext, $options: "i"} });
    }catch(err){
        console.log(err);
        return res.status(404).json({ 
            status: "Not Found",
            message: "No results found."
        });
    }

    
    return res.status(200).json({ 
        status: "Success",
        data: productsList
    });
}

module.exports = searchProducts;