import nodemailer from "nodemailer";
const gmailUsername = process.env.GMAIL_ACCOUNT_USERNAME
const gmailAppKey = process.env.GMAIL_APP_KEY
const gmailFrom = process.env.GMAIL_ACCOUNT_FROM
const gmailTo = process.env.GMAIL_ACCOUNT_TO

export async function sendEmail(data) {
  try {
    // nodemailer transporter obj
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUsername,
        pass: gmailAppKey,
      },
    });
    // nodemailer options
    const mailOptions = {
      from: gmailFrom,
      to: gmailTo,
      subject: data.subject,
      text: data.text,
    };
    console.log(` > CHECKPOINT: Sending email`);
    // send email
    const result = await transporter.sendMail(mailOptions);
    if (result.accepted.length > 0) {
      console.log(` >> SUCCESS: Email sent \n..........................`);
      return { success: result }
    }
    else {
      console.error(` >> FAILED: Email was not sent \n..........................`);
      return { error: "email was not sent - " }
    };
  } catch (error) {
    console.error(" >> FAILED: Email was not sent " + error + "\n...........................");
    return { error: "Email was not sent" };
  }
}
