import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";
import ReviewsCards from "./ReviewsCards";
import "../styles/reviews.scss";

const Reviews = ({ reviews, setReviews, isLoading, setIsLoading }) => {
  const fetchReview = async () => {
    setIsLoading(true);

    try {
      const querySnapshot = await getDocs(collection(db, "reviews"));
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setReviews(newData);
      console.log(reviews, newData);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReview();
  }, []);

  // Get the first three reviews only
  const firstThreeReviews = reviews.slice(0, 3);

  return (
    <div className="review-content" data-testid="review__content">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        firstThreeReviews.map((review) => (
          <div key={review.id} className="item">
            <ReviewsCards
              body={review.body}
              reviewId={review.id}
              date={review.date}
              name={review.name}
              rating={review.rating}
              title={review.title}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Reviews;
