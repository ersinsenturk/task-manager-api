const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        from: 'ers.sen@gmail.com',
        to: email,
        subject: 'Welcome',
        text: `Welcome to site ${name}`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        from: 'ers.sen@gmail.com',
        to: email,
        subject: 'Delete account',
        text: `Your account deleted ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}