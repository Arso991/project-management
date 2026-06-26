import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async ({ to, subject, body }) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to,
      subject,
      //text: "Hello world?", // plain text body
      html: body,
    });

    console.log("Message sent: %s", info.messageId);
    // Preview URL is only available when using an Ethereal test account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return info;
  } catch (err) {
    console.error("Error while sending mail:", err);
  }
};

export default sendEmail;
