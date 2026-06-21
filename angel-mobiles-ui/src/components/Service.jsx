import "./Service.scss";
// import { FileText, Database, FileCode, Keyboard } from "lucide-react";

const services = [
  {
    // icon: <FileText size={40} />,
    title: "USA Documentation",
    description:
      "Professional and accurate document preparation for U.S. based clients.",
  },
  {
    // icon: <Database size={40} />,
    title: "Australian Scraping",
    description:
      "Precise data scraping services tailored to Australian markets.",
  },
  {
    // icon: <FileCode size={40} />,
    title: "XML Processing",
    description: "Comprehensive XML data handling and processing solutions.",
  },
  {
    // icon: <Keyboard size={40} />,
    title: "Typing Projects",
    description:
      "Fast and accurate typing services to meet documentation needs.",
  },
];

const Service = () => {
  return (
    <section className="our-services">
      <div className="container">
        <h2>Our Services</h2>

        <p className="subtitle">
          We offer a range of reliable and efficient services, including:
        </p>

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
