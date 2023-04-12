"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(html) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();
    let accountInfo = {
        user: "adonis1156@vip.qq.com",
        pass: "ilfeonswyhmtfiac"
    }

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'qq',
        port: 465,
        secureConnection: true, // true for 465, false for other ports
        auth: {
            user: accountInfo.user, // generated ethereal user
            pass: accountInfo.pass, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'adonis1156@vip.qq.com', // sender address
        to: '1156452363@qq.com', // list of receivers
        subject: "七猫自动脚本执行结果", // Subject line
        // text: `您的验证码为：${code}`, // plain text body
        html, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// main().catch(console.error);

module.exports = main;
