import AfricasTalking from "africastalking";

const africastalking = AfricasTalking({
  username: process.env.AFRICASTALKING_USERNAME,
  apiKey: process.env.AFRICASTALKING_KEY,
});

export async function sendSMS(data) {
  try {
    const result = await africastalking.SMS.send({
      to: process.env.AFRICASTALKING_TO,
      message: data.subject + ": " + data.text,
      //   from: '[Your_sender_ID_goes_here]'
    });
    console.log(
      "SUCCESS: sms sent " + JSON.stringify(result) + "\n............"
    );
    return { success: result };
  } catch (err) {
    console.log("ERROR: sms not sent " + err + "\n............");
    return { error: err };
  }
}
