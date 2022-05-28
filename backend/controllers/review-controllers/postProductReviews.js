const productSchema = require('../../models/productSchema');

const postProductReviews= async (req, res, next)=>{
    const {review, rating, userid, productid} = req.body;
    let reviewId;
    if(!review || !rating || !userid){
        return res.status(400).json({
            status: "Failed",
            message: "Please fill all the fields"
        });
    }
    try{
        const product = await productSchema.findOneAndUpdate({_id: productid},
            {$push: {"user": {userid : userid, review: review, rating: rating}}}
        );

        if(product){
            console.log(product);
            reviewId = product.user;
        }
    }catch(err){
        console.log(err);
        return res.status(404).json({
            status: "Failed",
            message: "Error while posting."
        });
    }

    return res.status(201).json({
        status: "Success",
        message: "Review Posted.",
        data : reviewId
    });
    
}

module.exports=postProductReviews;