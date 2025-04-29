import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    //need smtp details - we're gonna use brevo SMTP
    //SMTP Server goes here 
    host: 'smtp-relay.brevo.com',
    //SMTP Port goes here: 
    port: '587', 
    auth: { 
        user: process.env.SMTP_USER, 
        password: process.env.SMTP_PASSWORD, 
    }
});

export default transporter;