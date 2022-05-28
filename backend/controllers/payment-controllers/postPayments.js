const Razorpay = require('razorpay');
const shortid = require('shortid')

const razorpay = new Razorpay({
    key_id: "rzp_test_TQISkxu8vsaCEH",
    key_secret: "Fr3rLmEskkCPfPND2iin23wK"
});

const postPayments = async (req, res, next) => {

    const { totalprice } = req.body;
    const currency = 'INR'
    const payment_capture = 1;

    const options = {
        amount: totalprice,
        currency,
        receipt: shortid.generate(),
        payment_capture
    };

    try {
        const response = await razorpay.orders.create(options);
        console.log(response);

        res.status(200).json({
            status: "OK",
            message: "",
            data: {
                id: response.id,
                amount: response.amount,
                currency: response.currency
            }
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = postPayments;