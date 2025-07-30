const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint to receive contact form submission
app.post('/submit-contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).send('Name, email, and message are required');
    }

    // Create transporter using Gmail SMTP (recommended to use App Password)
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'prathamshivekar12@gmail.com',        // <-- YOUR Gmail address
        pass: 'pass',    // <-- YOUR Gmail App Password (not your Gmail password)
      },
    });

    // Compose the email
    const mailOptions = {
      from: `"Website Contact Form" <yourgmail@gmail.com>`, // sender address
      to: 'prathamshivekar12@gmail.com',                    // list of receivers
      subject: subject || 'Contact Form Submission',
      html: `
        <h3>New contact submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject || 'N/A'}</p>
        <p><b>Message:</b><br>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).send('Thank you! Your message has been sent.');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Something went wrong. Please try again later.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
