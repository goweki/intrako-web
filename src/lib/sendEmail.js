import nodemailer from "nodemailer";

export async function sendEmail(data) {
  try {
    // nodemailer transporter obj
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_ACCOUNT_USERNAME,
        pass: process.env.GMAIL_APP_KEY,
      },
    });
    // nodemailer options
    const mailOptions = {
      from: process.env.GMAIL_ACCOUNT_FROM,
      to: process.env.GMAIL_ACCOUNT_TO,
      subject: data.subject,
      text: data.text,
    };
    console.log(`CHECKPOINT: Sending email \n >> \n..........................`);
    // send email
    const result = await transporter.sendMail(mailOptions);
    if (result.accepted.length > 0) return { success: result };
    else return { error: "email was not sent - " };
  } catch (error) {
    console.log("ERROR: email not sent " + error + "\n............");
    return { error: "mail was not sent" };
  }
}
