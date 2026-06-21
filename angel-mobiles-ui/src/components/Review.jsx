import "./Review.scss";
// import { Star } from "lucide-react";

const reviews = [
  {
    name: "John Smith",
    company: "USA Client",
    review:
      "Excellent service and accurate documentation. The team delivered everything on time with great communication.",
    rating: 5,
  },
  {
    name: "David Wilson",
    company: "Australian Client",
    review:
      "Highly professional data scraping services. Fast turnaround and quality results.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    company: "Business Owner",
    review:
      "Very reliable and supportive throughout the project. Would definitely work with them again.",
    rating: 5,
  },
];

const Review = () => {
  return (
    <section className="user-reviews">
      <div className="container">
        <h2>What Our Clients Say</h2>

        <div className="review-grid">
          {reviews.map((item, index) => (
            <div className="review-card" key={index}>
              <div className="stars">
                {/* {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))} */}
              </div>

              <p className="review-text">"{item.review}"</p>

              <div className="review-user">
                <div className="avatar">{item.name.charAt(0)}</div>

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
