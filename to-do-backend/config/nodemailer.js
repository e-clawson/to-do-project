import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    //need smtp details - we're gonna use brevo smtp?
    host: 'host',
    port: '', 
    auth: { 
        user: process.env.SMTP_USER, 
        password: process.env.SMTP_PASS, 
    }

});

export default transporter;