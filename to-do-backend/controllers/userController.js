import User from "../models/userModel.js";

export const getUserData = async (req,res) => {

    try {
        const {userId} = req.body; 

        const user = await User.findById({userId}); 

        if(!user){ 
            return res.json({success: false, message: "User not found"})
;        }

        res.json({
            success: true, 
            userData: { 
                name: user.name, 
                isAccountVerified: user.isAccountVerified
                //can add more here 
            }
        });

    } catch (err) {
        res.json({success: false, message: err.message})
    }
    
};