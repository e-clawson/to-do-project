import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    const {token} = req.cookies;
    
    if (!token) {
        return res.json({success: false, message: 'Not Authorized, sign in again' })
    }

    try {

        //get the user id from the cookie
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET); 

        if(tokenDecode.id){
            req.body.userId = tokenDecode.id; 
        }else{
            return res.json({success: false, message: 'Not Authorized, sign in again' })
        }

        next();


    } catch (error) { 
        return res.json({success: false, message: error.message })
    }
}

export default userAuth; 