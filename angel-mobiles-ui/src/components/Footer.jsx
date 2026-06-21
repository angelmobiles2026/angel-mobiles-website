import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo-area">
            <div className="footer-logo">A</div>
            <div className="footer-brand-name">ANGLE MOBILE</div>
          </div>
          <p>
            Angle Mobile is your one-stop destination for the latest
            smartphones, accessories, neckbands and headphones.
          </p>
          <div className="social-links">
            {["f", "📷", "in", "💬"].map((s, i) => (
              <button key={i} className="social-btn">
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            {[
              "Home",
              "Mobiles",
              "Accessories",
              "Neckbands",
              "Headphones",
              "Offers",
              "About Us",
              "Contact Us",
            ].map((l) => (
              <li key={l}>
                <a href="#">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>CUSTOMER SERVICE</h4>
          <ul>
            {[
              "Track Order",
              "Return & Refund",
              "Shipping Policy",
              "Privacy Policy",
              "Terms & Conditions",
              "FAQ",
              "Support",
            ].map((l) => (
              <li key={l}>
                <a href="#">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>STORE INFORMATION</h4>
          <div className="contact-item">
            <span className="c-icon">📍</span>
            <span>
              123, Tech Street, Near City Mall, Your City, State - 600001
            </span>
          </div>
          <div className="contact-item">
            <span className="c-icon">📞</span>
            <span>+91 98765 43210</span>
          </div>
          <div className="contact-item">
            <span className="c-icon">✉️</span>
            <span>support@anglemobile.com</span>
          </div>
          <div className="contact-item">
            <span className="c-icon">🕐</span>
            <span>Mon – Sun: 10:00 AM – 9:00 PM</span>
          </div>
        </div>
        <div className="footer-col">
          <h4>WE ACCEPT</h4>
          <div className="payment-icons" style={{ flexWrap: "wrap", gap: 8 }}>
            {["VISA", "Mastercard", "RuPay", "UPI"].map((p) => (
              <div key={p} className="pay-icon">
                {p}
              </div>
            ))}
          </div>
          <h4 style={{ marginTop: 20 }}>EMI PARTNERS</h4>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["HDFC", "Bajaj", "IDFC"].map((p) => (
              <div key={p} className="pay-icon">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2024 Angle Mobile. All Rights Reserved.</span>
        <div className="payment-icons">
          {["VISA", "MC", "RuPay", "UPI", "HDFC", "BAJAJ"].map((p) => (
            <span key={p} className="pay-icon">
              {p}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
