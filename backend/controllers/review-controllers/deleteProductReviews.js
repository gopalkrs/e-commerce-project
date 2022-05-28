const productSchema = require('../../models/productSchema');

const deleteProductReviews= async (req, res, next)=>{
    const userid = req.params.userid;
    const reviewid = req.params.reviewid;
    const productid = req.params.productid;

    let deletedPost;
    if(!userid || !reviewid || !productid){
        return res.status(400).json({
            status: "Bad Request",
            message: "User/Review is null or not found."
        });
    }

    try{
        deletedPost = await productSchema.findOneAndUpdate({_id: productid}, 
            {$pull: {"user": {userid: userid, _id: reviewid}}}
        );
        console.log(deletedPost);
    }catch(err){
        console.log(err);
    }

    return res.status(201).json({
        status: "Success",
        message: "Review Deleted.",
        data: {
            deletedPost
        }
    });

    
}

module.exports=deleteProductReviews;