import AfricasTalking from "africastalking";
const apiUsername = process.env.AFRICASTALKING_USERNAME
const apiKey = process.env.AFRICASTALKING_KEY
const smsTo = process.env.AFRICASTALKING_TO

const africastalking = AfricasTalking({
  username: apiUsername,
  apiKey: apiKey,
});

export async function sendSMS(data) {
  console.log(` > CHECKPOINT: Sending SMS`);
  try {
    const result = await africastalking.SMS.send({
      to: smsTo,
      message: data.subject + ": " + data.text,
      //   from: '[Your_sender_ID_goes_here]'
    });
    console.log(
      " >> SUCCESS: sms sent " + JSON.stringify(result) + "\n.........................."
    );
    return { success: result };
  } catch (err) {
    console.error(" >> SMS was not sent " + err + "\n..........................");
    return { error: err };
  }
}
