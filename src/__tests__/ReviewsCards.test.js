import { render } from "@testing-library/react";
import ReviewsCards from "../components/ReviewsCards";
import "@testing-library/jest-dom/extend-expect";

describe("ReviewCards", () => {
  const validProps = {
    name: "user1",
    title: "Excellent",
    formattedDate: "2023-07-20",
    rating: "5",
    body: "Amazing app",
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ReviewsCards
        name={validProps.name}
        title={validProps.title}
        date={validProps.date}
        rating={validProps.rating}
        body={validProps.body}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId, getByText } = render(
      <ReviewsCards
        name={validProps.name}
        title={validProps.title}
        date={validProps.date}
        rating={validProps.rating}
        body={validProps.body}
      />
    );
    expect(getByText(/Excellent/)).toHaveClass("title");
    expect(getByTestId("review_rating")).toHaveAttribute("class", "rating");
  });
});
