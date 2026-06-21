import "./AnnouncementBar.scss";
import jsonData from "../services/data.json";

const offers = jsonData.offers;

const AnnouncementBar = () => {
  return (
    <section className="announcement-bar">
      <div className="announcement-track">
        {offers.map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </section>
  );
};

export default AnnouncementBar;
