import { useState } from "react";
import "./Header.scss";
import ModalPopup from "./ModalPopup";

const Header = () => {
  const [openContactForm, setOpenContactForm] = useState(false);
  return (
    <header className="header">
      <div className="header-inner">
        <a className="logo" href="#">
          ANGEL
        </a>
        <nav>
          {["Home", "About", "Products", "Offers", "Reviews"].map((item, i) => (
            <a key={item} href="#" className={i === 0 ? "active" : ""}>
              {item}
            </a>
          ))}
        </nav>
        <button
          className="contact-btn"
          onClick={() => setOpenContactForm(true)}
        >
          Contact us
        </button>
      </div>
      <ModalPopup
        open={openContactForm}
        onClose={() => setOpenContactForm(false)}
      >
        <div className="contact-form-container">
          <h2 className="contact-form-title">Contact Us</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" name="name" required />

            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
            />

            <input type="tel" placeholder="Phone Number" name="phone" />

            <textarea
              placeholder="Your Message"
              name="message"
              rows={5}
              required
            />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </ModalPopup>
    </header>
  );
};

export default Header;
