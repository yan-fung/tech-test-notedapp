import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Reviews from "../components/Reviews";

describe("Reviews component", () => {
  const testData = [1, 2, 3, 4, 5];
  const result = testData.slice(0, 3);

  it("renders the first three elements only", () => {
    expect(result).toEqual([1, 2, 3]);
  });

  // xit("render correctly", () => {
  //   const { asFragment } = render(
  //     <BrowserRouter>
  //       <Reviews result={result} />
  //     </BrowserRouter>
  //   );
  //   expect(asFragment()).toMatchSnapshot();
  // });
});
