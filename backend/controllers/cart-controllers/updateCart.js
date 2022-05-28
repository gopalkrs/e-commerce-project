const cartSchema = require('../../models/cartSchema');
const orderSchema = require('../../models/orderSchema');


const updateCart = async (req, res, next) => {
    const { userid, rzp_data } = req.body;
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = rzp_data;

    let updatedCart;
    if (!userid) {
        return res.status(400).json({
            status: "Bad Request",
            message: "User/Cart is null or not found."
        });
    }

    try {
        updatedCart = await cartSchema.findOneAndUpdate({ userid: userid, "cartitems.ordered": false },
            { $set: { "cartitems.$.ordered": true } }
        );
        console.log(updatedCart);


        const order = new orderSchema({ userid: userid, razorpay_order_id: razorpay_order_id, razorpay_payment_id: razorpay_payment_id, razorpay_signature: razorpay_signature});

        await order.save();
    } catch (err) {
        console.log(err);
    }

    return res.status(201).json({
        status: "Success",
        message: "Item updated",
        data: {
            updatedCart
        }
    });


}

module.exports = updateCart;