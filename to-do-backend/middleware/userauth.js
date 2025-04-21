import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    const {token} = req.cookies;
    //getting undefined here on console.log
    
    if (!token) {
        
        return res.json({success: false, message: 'Not Authorized, sign in again!' })
        
    } //hitting this on sign in and not changing the name 

    try {
        //get the user id from the cookie
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET); 
        console.log(tokenDecode)

        if(tokenDecode.id){
            req.body.id = tokenDecode.id; 
        }else{
            return res.json({success: false, message: 'Not Authorized, sign in again' })
        }

        next();


    } catch (error) { 
        return res.json({success: false, message: error.message })
    }
}

export default userAuth; 