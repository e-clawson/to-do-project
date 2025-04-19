import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

//controller function for user signup 
export const signup = async (req, res) => {
    const {name, email, password} = req.body;

    //check that all the required info is included 
    if(!name || !email || !password){//if data isn't available, return:
        return res.json({success: false, message: 'missing details'});
    }

    try { 
        //check if user already exists for this email
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.json({success: false, message: 'User Already Exists'})
        }
        
        //if no user exists for that email then create a password hash
        const hashedPassword = await bcrypt.hash(password, 10);

        //create new user 
        const newUser = new User({name, email, password: hashedPassword});
        //save/store in database 
        await newUser.save(); 

        //generate token using JWT - generated using the user's id and provided an expiry 
        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
        //using a cookie we will send this token ('name', value {object})
        res.cookie('token', token, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' :'strict', 
            //either strict or none - local will be strict, when front and backend are on another domain names it is none
            // so this ternary tells it when we're in production put none otherwise put strict 
            maxAge: 7 * 24 * 60 * 60 * 1000 //expiry time for 7 days (days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
        })

        return res.json({success: true}); //user is successfully logged in 

    } catch(err) {
        res.json({success: false, message: err.message})
    }
}

//controller function for user login 
export const signin = async (req, res) => {
    const {name, email, password} = req.body;

    //validate email and password 
    if(!email || !password ){  // if email or password are missing
        return res.json({success: false, message: 'Email and Password are required'});
    }

    try {
        //find user 
        const user = await User.findOne({email});

        //if there is no user found
        if(!user){ 
            return res.json({success: false, message: 'Invalid Email'})
        }
        //if user exists, check the password:
        const passwordMatch = await bcrypt.compare(password, user.password);
        //if password doesn't match return response
        if(!password){ 
            return res.json({success: false, message: 'Invalid Password'})
        }

        //if user exists and password is the same, generate a token 

        //generate token using JWT - generated using the user's id and provided an expiry 
        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
        
        //using a cookie we will send this token ('name', value {object})
        res.cookie('token', token, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' :'strict', 
            maxAge: 7 * 24 * 60 * 60 * 1000 
        }); 

        return res.json({success: true}); //user is successfully logged in 

    } catch(err){
        return res.json({success: false, message: err.message});
    }
}

//controller function for signout 
export const signout = async (req,res) => {
    try { 
        //clear the cookie from the response 
        res.clearCookie('token', {
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' :'strict', 
        });

        //return the response 
        return res.json({success: true, message: "Successfuly Signed Out"})

    } catch(err) {
        return res.json({success: false, message: err.message});
    }
}