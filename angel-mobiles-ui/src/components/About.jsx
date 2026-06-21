import "./About.scss";
// import { Clock3, ShieldCheck, Headset } from "lucide-react";

const features = [
  {
    // icon: <Clock3 size={40} />,
    title: "Expertise",
    description:
      "Specialized in handling complex projects with accuracy and professionalism.",
  },
  {
    // icon: <Clock3 size={40} />,
    title: "Timely Delivery",
    description: "Projects delivered on schedule with high quality standards.",
  },
  {
    // icon: <Headset size={40} />,
    title: "Supporting",
    description:
      "Providing reliable support and communication throughout every project.",
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
          Contact us to learn how we can help you achieve your project goals.
        </p>
      </div>
    </section>
  );
};

export default About;
