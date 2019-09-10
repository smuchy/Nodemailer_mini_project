var path = require("path");
var nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "nikola.ristic14@gmail.com",
    pass: ""
  },
  tls: {
    rejectUnauthorized: false
  }
});

let HelperOptions = {
  from: '"Nikola Ristic" <nikola.ristic14@gmail.com',
  to: "marijastankovic666@gmail.com",
  subject: "Hello Mako!",
  text: "Straight outta node js!!!"
};

transporter.sendMail(HelperOptions, (err, info) => {
  if (err) {
    console.log(err);
  }

  console.log("Message sent!");
  console.log(info);
});
