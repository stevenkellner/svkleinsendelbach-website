import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import * as nodemailer from 'nodemailer';
import * as admin from 'firebase-admin';

const app = express();
app.use(cors({ origin: true }));
admin.initializeApp();

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'strafen.no.reply@gmail.com',
        pass: 'rircy1-fybrEg-fawcaq'
    }
});
app.post('/sendContactMail', (req, res) => {
    const mailOptions = {
        from: `${req.body.sender.name} <${req.body.sender.address}>`,
        to: req.body.receiver.address,
        subject: `${req.body.sender.name}; E-Mail von der SVK - Website`,
        html: ` <p style="font-size: 16px;">Hallo Vertreter der/des ${req.body.receiver.name}/s,</p>
                <br/>
                <p>diese Mail wurde von der SV Kleinsendelbach Website von ${req.body.sender.name}, ${req.body.sender.address} versendet:</p>
                <br/>
                <p>${req.body.message}</p>
              `
    };
    return transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            return res.send({success: false, message: error.toString()});
        }
        return res.send({success: true, message: "Email sended"});
    });
});

exports.backend = functions.region("europe-west1").https.onRequest(app);
