const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = process.env.SENDGRID_API_KEY


sgMail.setApiKey(sendgridAPIKey)


const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: '5354.john@gmail.com',
        subject: 'Thanks for joining in! ',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendDeleteEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: '5354.john@gmail.com',
        subject: 'Account Deleted ',
    text: `Bye Bye ${name} I hope you enjoy the app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}