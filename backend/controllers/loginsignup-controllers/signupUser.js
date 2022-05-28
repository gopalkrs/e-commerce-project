const bcrypt = require('bcrypt');
const userSchema = require('../../models/userSchema');

const signupUser = async(req, res, next)=>{
    const {name, password, email} = req.body;
    let newUser;

    if(!name || !password || !email){
        return res.status(404).json({
            status: 'fail',
            message: 'Please fill all the fields'
        });
    }

    const existingUser = await userSchema.findOne({email: email});
    if(existingUser){
        return res.status(404).json({
            status: 'fail',
            message: 'User already exists'
        });
    }else{
        try{
            let hash;
            hash = await bcrypt.hash(password, 12);
            newUser = new userSchema({name: name, email: email, password: hash});
        }catch(err){
            console.log(err);
        }
    }
    
    newUser.save().then((data)=>{
        return res.status(200).json({
            status: "Success",
            message: "User signed up successfully."
        });
    }).catch((err)=>{
        console.log(err);
        return res.status(400).json({
            status: "failed",
            message: "Error signing up."
        });
    })

    
}

module.exports = signupUser;