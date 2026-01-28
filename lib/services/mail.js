'use strict';

const Nodemailer = require('nodemailer');
const { Service } = require('@hapipal/schmervice');

module.exports = class MailService extends Service {

    transporter() {
        return Nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });
    }

    async sendWelcome(user) {
        const transport = this.transporter();

        await transport.sendMail({
            from: process.env.MAIL_FROM || 'noreply@iut-project.local',
            to: user.mail,
            subject: 'Bienvenue sur IUT Project !',
            text: `Bonjour ${user.firstName},\n\nBienvenue sur notre plateforme !\n\nCordialement,\nL'équipe IUT Project`
        });
    }
}
