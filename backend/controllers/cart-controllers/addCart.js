const cartSchema = require('../../models/cartSchema');

const addCart = async (req, res, next)=>{
    const {userid, itemid, price, totalno} = req.body;

    let data;
    if(!totalno || !price || !userid){
        return res.status(400).json({
            status: "Failed",
            message: "Please fill all the fields"
        });
    }
    const totalprice = totalno*price;

    try{
        const existingCart = await cartSchema.findOne({userid: userid});
        if(!existingCart){
            const newCart = new cartSchema({userid: userid});
            newCart.cartitems.push({
                itemid: itemid,
                totalno: totalno,
                price: price,
                totalprice: totalprice
            });

            await newCart.save();
        }
        else{
            data = await cartSchema.findOneAndUpdate({userid: userid},
                {$push: {"cartitems": {itemid : itemid, totalno: totalno, price: price, totalprice: totalprice}}}
            );
        }
        return res.status(200).json({
            status: "Success",
            message: "Item added to cart.",
            data: data
        });
    }catch(err){
        console.log(err);
        return res.status(400).json({
            status: "Failure",
            message: "Error adding item to cart."
        });
    }

}
module.exports = addCart;