import "../styles/reviewsCards.scss";

const ReviewsCards = ({ body, date, name, rating, title }) => {
  const formattedDate = date ? date.toDate().toLocaleDateString() : "";
  const getStars = (rating) => {
    const filledStars = "★".repeat(Math.floor(rating));
    const emptyStars = "☆".repeat(5 - Math.ceil(rating));
    return filledStars + emptyStars;
  };
  return (
    <>
      <div className="review-cards-container">
        <div className="title-date-container">
          <div className="title">{title}</div>
          <div className="date">{formattedDate}</div>
        </div>
        <div className="rating-name-container">
          <div className="rating" data-testid="review_rating">
            {getStars(rating)}
          </div>
          <div className="name">{name}</div>
        </div>
        <p className="body">{body}</p>
      </div>
    </>
  );
};

export default ReviewsCards;
