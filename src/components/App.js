import { useState } from "react";
import Reviews from "./Reviews";
import "../styles/app.css";

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <div className="App">
        <Reviews
          reviews={reviews}
          setReviews={setReviews}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
    </>
  );
};

export default App;
