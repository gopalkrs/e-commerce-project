const productSchema = require('../../models/productSchema');

const getsingleproduct = async (req, res, next)=>{
    const itemid = req.params.itemid;
    let productsDescription;
    try {
        productsDescription = await productSchema.findById(itemid);
        if(!productsDescription){
            res.status(404).json({ 
                status: "Failure",
                message: "wrong id received"
            });
        }
    }catch(err){
        console.log(err);
    }

    res.status(200).json({ 
        status: "Success",
        data: productsDescription
    });
}

module.exports = getsingleproduct;