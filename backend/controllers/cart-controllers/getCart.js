const cartSchema = require('../../models/cartSchema');

const getCart= async (req, res, next)=>{
    const userid = req.params.userid;

    let data;
    try{
        const product = await cartSchema.findOne({userid: userid, "cartitems.ordered": false});
        data = product.cartitems;
    }catch(err){
        console.log(err);
        return res.status(404).json({
            data:[],
            status: "Failed",
            message: "No items added in the cart."
        });
    }

    return res.status(201).json({
        status: "Success",
        message: "User cart",
        data: data
    });
}

module.exports = getCart;