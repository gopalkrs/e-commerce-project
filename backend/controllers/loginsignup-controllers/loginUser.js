const userSchema = require('../../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const loginUser = async(req, res, next)=>{
    const {email, password} = req.body;
    let existingUser;
    let validPass = false;
    if(!password || !email){
        return res.status(404).json({
            status: 'fail',
            message: 'Please fill all the fields'
        });
    }

    try{
        existingUser = await userSchema.findOne({email: email});
        if(!existingUser){
            return res.status(404).json({
                status: 'fail',
                message: 'User does not exist.'
            });
        }
    }catch(err){
        console.log(err);
    }

    try{
        validPass = await bcrypt.compare(password, existingUser.password);
        if(!validPass){
            return res.status(404).json({
                status: 'fail',
                message: 'Wrong password entered, enter correct password'
            });
        }
    }catch(err){
        console.log(err);
    }

    let token;
    try{
        token = jwt.sign({email: existingUser.email}, process.env.MY_SECRET_KEY, {expiresIn: '1hr'});
        return res.header({"auth-token": token}).json({
            status: "success",
            message: "User signed in.",
            data: {
                token,
                existingUser
            }
        });
    }catch(err){
        console.log(err);
    }

    


}
module.exports = loginUser;