import { useState } from "react";
import ModalPopup from "./ModalPopup";
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
  const [openReviewForm, setOpenReviewForm] = useState(false);
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
        <button
          className="add-review-btn"
          onClick={() => setOpenReviewForm(true)}
        >
          Write a Review
        </button>
      </div>
      <ModalPopup
        open={openReviewForm}
        onClose={() => setOpenReviewForm(false)}
      >
        <div className="review-form-container">
          <h2 className="review-form-title">Contact Us</h2>
          <form className="review-form">
            <input type="text" placeholder="Your Name" name="name" required />

            <input type="text" placeholder="Location" name="location" />

            <select name="rating" required defaultValue="">
              <option value="" disabled>
                Select Rating
              </option>
              <option value="5">⭐⭐⭐⭐⭐ (5)</option>
              <option value="4">⭐⭐⭐⭐ (4)</option>
              <option value="3">⭐⭐⭐ (3)</option>
              <option value="2">⭐⭐ (2)</option>
              <option value="1">⭐ (1)</option>
            </select>

            <textarea
              placeholder="Write your review..."
              name="review"
              rows={5}
              required
            />

            <button type="submit">Submit Review</button>
          </form>
        </div>
      </ModalPopup>
    </section>
  );
};

export default Review;
