import "./Header.scss";

const Header = () => {
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
        <button className="contact-btn">Contact us</button>
      </div>
    </header>
  );
};

export default Header;
