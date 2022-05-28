const cartSchema = require('../../models/cartSchema');

const removeFromCart= async (req, res, next)=>{
    const userid = req.params.userid;
    const cartitemid = req.params.cartitemid;

    let deletedPost;
    if(!userid || !cartitemid){
        return res.status(400).json({
            status: "Bad Request",
            message: "User/Cart is null or not found."
        });
    }

    try{
        deletedPost = await cartSchema.findOneAndUpdate({userid: userid}, 
            {$pull: {"cartitems": {_id: cartitemid}}}
        );
        console.log(deletedPost);
    }catch(err){
        console.log(err);
    }

    return res.status(201).json({
        status: "Success",
        message: "Item removed from cart.",
        data: {
            deletedPost
        }
    });

    
}

module.exports=removeFromCart;