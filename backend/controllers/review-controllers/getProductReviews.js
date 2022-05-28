const productSchema = require('../../models/productSchema');

const getProductReviews= async (req, res, next)=>{
    const productid = req.params.productid;

    let reviews;
    try{
        const product = await productSchema.findOne({_id: productid});
        reviews = product.user;
    }catch(err){
        console.log(err);
        return res.status(404).json({
            status: "Success",
            message: "Not Found."
        });
    }

    return res.status(201).json({
        status: "Success",
        message: "Review Posted.",
        data: reviews
    });
}

module.exports=getProductReviews;