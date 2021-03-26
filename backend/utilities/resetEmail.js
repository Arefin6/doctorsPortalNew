import nodemailer from 'nodemailer'
import { google } from 'googleapis'

const resetEmail = (user,token) =>{

// These id's and secrets should come from .env file.
const CLIENT_ID ='110042461265-rql8kc8lubdf3e31u7u0mote2te0vjgs.apps.googleusercontent.com';
const CLIENT_SECRET = 'HGWGbjNWbo-FEiPzl2ls3h0Z';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04J74uAblRfHtCgYIARAAGAQSNwF-L9Irl80axd9EL9DJ8jPyJOwya8ycQ9UzvYzM4lBUlqe0wYaFxnVE7RVf9DrwqnN3eZ5w8X8';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'arefinhossain3@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    
    const url =`http://localhost:3000/reset/${token}`
    const mailOptions = {
        to:user.email,
        from:"no-replay@insta.com",
        subject:"password reset",
        html:`
        <p>You requested for password reset</p>
        <h5>click in this <a href="${url}">link</a> to reset password</h5> `,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log('Email sent...', result))
  .catch((error) => console.log(error.message));
}
export default resetEmail;