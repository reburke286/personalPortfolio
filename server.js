// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var nodemailer = require("nodemailer");
// var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Messages
const messages = [];

// Routes
// =============================================================

// Get Routes
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/html/index.html"));
});

app.get("/portfolio", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/html/portfolio.html"));
});

app.get("msg", function (req, res) {
  return res.json(messages);
});

// Post Routes
app.post("/msg", (req, res) => {
  const output = `
  <p>You have a new message</p>
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
  </ul>
  <h3>Message</h3>
  <p> ${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "reburke286",
      pass: "$croogeMcDuck3",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '"Portfolio Contact" <reburke286@gmail.com>',
    to: "rebeccadburke@gmail.com",
    subject: "Contact from Portfolio",
    html: output,
  });

  console.log("Message sent: %s", info.messageId);

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
