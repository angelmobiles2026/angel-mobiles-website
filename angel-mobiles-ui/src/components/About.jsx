import "./About.scss";
// import { Clock3, ShieldCheck, Headset } from "lucide-react";

const features = [
  {
    // icon: <Clock3 size={40} />,
    title: "Best Price Guarantee",
    description:
      "We focus on providing competitive and affordable pricing so you always get the best deal without overpaying.",
  },
  {
    // icon: <Clock3 size={40} />,
    title: "Trusted After-Sales Support",
    description:
      "Enjoy reliable support for setup, troubleshooting, and basic service guidance even after your purchase.",
  },
  {
    // icon: <Headset size={40} />,
    title: "Easy EMI & Flexible Payment Options",
    description:
      "Make your purchase easier with convenient EMI options and multiple payment methods",
  },
];

const About = () => {
  return (
    <section className="why-choose-us">
      <div className="container">
        <h2>Why Choose Us?</h2>

        <div className="feature-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <p className="bottom-text">
          Contact us to learn how we can help you choose best smartphone.
        </p>
      </div>
    </section>
  );
};

export default About;
