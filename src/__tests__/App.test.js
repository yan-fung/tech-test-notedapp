import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";
import "../styles/app.css";

it("renders app", () => {
  const { asFragment } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
