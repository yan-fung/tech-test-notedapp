const ReviewsCards = ({ body, date, name, rating, title }) => {
  const formattedDate = date ? date.toDate().toLocaleDateString() : "";
  return (
    <>
      <div>
        <div className="title">{title}</div>
        <div className="rating" data-testid="review_rating">
          {rating}
        </div>
        <div className="date">{formattedDate}</div>
        <div className="name">{name}</div>
        <p className="body">{body}</p>
      </div>
    </>
  );
};

export default ReviewsCards;
