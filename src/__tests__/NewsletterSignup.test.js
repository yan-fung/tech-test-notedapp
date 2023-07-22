import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NewsletterSignup from "../components/NewsletterSignup";

describe("NewsletterSignup component", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <NewsletterSignup />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
