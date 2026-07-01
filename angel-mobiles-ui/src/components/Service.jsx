import "./Service.scss";
// import { FileText, Database, FileCode, Keyboard } from "lucide-react";

const services = [
  {
    // icon: <FileText size={40} />,
    title: "Leading Brand Smartphones",
    description:
      "Explore the latest smartphones from top brands including Apple, Samsung, Vivo, Oppo, Realme, Redmi, Oneplus, Motorola and more.",
  },
  {
    // icon: <Database size={40} />,
    title: "Mobile Hardware Services",
    description:
      "Display/Screen replacement, Back glass & back door replacement, Battery replacement, Charging port repair, Speaker & microphone repair, Camera replacement, Power button & Volume button repair, Water damage inspection & repair.",
  },
  {
    // icon: <FileCode size={40} />,
    title: "Software Services",
    description:
      "Software installation & updates, Androis & Iphone troubleshooting, Data backup & recovery, Mobile formatting & reset, Performance optimization, App installation & setup, Account setup(Google, Apple ID, Email), Phone data transfer.",
  },
  {
    // icon: <Keyboard size={40} />,
    title: "Extended Warranty Plans",
    description:
      "Extended production plans, Screen production coverage, Accidental damage support, Affordable warranty extensions, Hassle-Free claim assistance.",
  },
];

const Service = () => {
  return (
    <section className="our-services">
      <div className="container">
        <h2>Our Services</h2>

        <p className="subtitle">Complete mobile solutions under one roof</p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
