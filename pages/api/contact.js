async function handler(req, res) {
  if (req.method == "POST") {
    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
      secure: true,
    });
    const mailData = {
      from: process.env.EMAIL,
      to: process.env.MYEMAIL,
      subject: `Message From ${req.body.firstname} ${req.body.lastname}`,
      text: req.body.subject,
    };
    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });

    res.redirect("/contact?ok=ok");
  }
}
export default handler;
