function handler(req, res) {
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
    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });

    res.redirect("/contact?ok=ok");
  }
}
export default handler;
