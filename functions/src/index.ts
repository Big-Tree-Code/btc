'use strict';

import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';
import * as cors from 'cors';

// let cors = new corsM({
//   origin: true
// });
//const functions = require("firebase-functions");
//const nodemailer = require('nodemailer');
//const smtpTransport = require('nodemailer-smtp-transport');
// const cors = require("cors")({
//   origin: true
// });

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

export const contactUsMailer = functions.https.onRequest((request, response) => {
  

  response.send("Emailing from Firebase!");
 });
 