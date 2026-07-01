import transporter from "../config/mail.js";

const template = ({ name, email, phone, message }) => `
<h2>New Contact Request</h2>

<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Message:</strong> ${message}</p>
`;

const sendContactEmail = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New Contact Form - ${name}`,
      html: template({ name, email, phone, message }),
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (err) {
    console.error("Email Error:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to send email.",
    });
  }
};

export { sendContactEmail };
