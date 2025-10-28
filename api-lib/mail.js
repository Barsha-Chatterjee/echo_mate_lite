import nodemailer from 'nodemailer';
import * as aws from '@aws-sdk/client-ses';
// So we can use .env variables locally import dotenv
import * as dotenv from 'dotenv';

dotenv.config();

const ses = new aws.SES({
  apiVersion: '2010-12-01',
  region: 'ap-south-1',
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  },
});

// create Nodemailer SES transporter
const transporter = nodemailer.createTransport({
  SES: { ses, aws },
});
export async function sendMail({ from, to, subject, html }) {
  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      html,
    });
  } catch (e) {
    throw new Error(`Could not send email: ${e.message}`);
  }
}

export const CONFIG = {
  // TODO: Replace with the email you want to use to send email
  from: 'barshachatterjee427@gmail.com',
};
