import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import transporter from '../config/nodemailer.js';

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
        }); 

        // //send welcome email: 
        // const mailOptions = {
        //     //senders email id
        //     from: process.env.SENDER_EMAIL, 
        //     to: email, 
        //     subject: 'Welcome to To-Do App!',
        //     text: `Welcome to To-Do App! your acconut has been created with the following email: ${email}`
        // }
        // await transporter.sendMail(mailOptions);
        // //will send an email and then generate response of success - true 

        return res.json({success: true}); //user is successfully logged in 

    } catch(err) {
        res.json({success: false, message: err.message})
    }
}

//controller function for user login 
export const signin = async (req, res) => {
    const {email, password} = req.body;

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
        if(!passwordMatch){ 
            return res.json({success: false, message: 'Invalid Password'})
        }

        //if user exists and password is the same, generate a token 

        //generate token using JWT - generated using the user's id and provided an expiry 
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
        
        //using a cookie we will send this token ('name', value {object})
        res.cookie('token', token, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' :'strict', 
            maxAge: 7 * 24 * 60 * 60 * 1000 
        }); 

        return res.json({success: true, message: "user signed in!"}); //user is successfully logged in 

    } catch(err){
        console.log(err)
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


//send verification OTP to the User's email 
export const sendVerifyOtp = async (req, res) => {
    try {
        const {userId} = req.body;

        //find user in DB 
        const user = await User.findById(userId);

        if(user.isAccountVerified){
            return res.json({success: false, Message: "account already verified"})
        }

        //will generate a 6 digit number as a string 
        const otp = String(Math.floor(100000 + Math.random() * 900000))
      
        //save otp in sendVerify otp 
        user.sendVerifyOtp = otp;
        //set expiration to 24 hours 
        user.sendVerifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000;
        //save these updates 
        await user.save(); 

        const mailOptions = {
            //senders email id
            from: process.env.SENDER_EMAIL, 
            to: email, 
            subject: 'Welcome to To-Do App!',
            text: `Your Otp is ${otp}. Verify your account using this OTP`
        }
        await transporter.sendMail(mailOptions);
        //will send an email and then generate response of success - true 
        res.json({success: true, message: "verification OTP Sent to Email"})

    } catch(err) {
        res.json({success: false, message: err.message})
    }
}

//get otp and verify user acconut 
export const verifyEmail = async (req, res) => {
    //need user id and otp 
    const {userId, otp} = req.body;

    //check both
    if(!userId || !otp) {
        return res.json({success: false, message: "Missing Details"})
    }
    try {
       const user = await User.findById(userId)
       if(!user){
        return res.json({success: false, message: "User Not Found"})
       }
       if(user.verifyOtp === '' || user.verifyOtp !== otp){
        return res.json({success: false, message: "Invalid OTP"})
       }
       if(user.sendVerifyOtpExpireAt < Date.now()) {
        return res.json({success: false, message: "OTP Expired"})
       }

       //verify users account 
       user.isAccountVerified = true; 
       user.verifyOtp = ''; 
       user.sendVerifyOtpExpireAt = 0; 

       await user.save(); 

       return res.json({success: true, message: "Email verified Successfully"})
       
    } catch (err) {
        res.json({success: false, message: err.message})
    }

}