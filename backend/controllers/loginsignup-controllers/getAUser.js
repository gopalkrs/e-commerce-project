const userSchema = require('../../models/userSchema');

const getAUser = async (req, res, next)=>{
    const uId = req.params.userid;

    let user;
    try{
        user = await userSchema.findById(uId);
    }catch(err){
        console.log(err);
    }
    if(user){
        return res.status(200).json({
            status: "Success",
            message: "User Found",
            data: user.name
        });
    }
    else{
        return res.status(401).json({
            status:'Failed',
            message: "User not exists."
        });
    }

}
module.exports = getAUser;