import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { unmountComponentAtNode } from "react-dom";

// component
import Footer from "./../Footer";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders without crashing", () => {
  render(<Footer />, container);
});

// social links
it("should navigate to facebook when link is clicked", () => {
  const { getByTestId } = render(<Footer />);
  expect(getByTestId("fb-icon")).toHaveAttribute(
    "href",
    "https://facebook.com"
  );
});
it("should navigate to facebook when link is clicked", () => {
  const { getByTestId } = render(<Footer />);
  expect(getByTestId("ig-icon")).toHaveAttribute(
    "href",
    "https://instagram.com"
  );
});
it("should navigate to facebook when link is clicked", () => {
  const { getByTestId } = render(<Footer />);
  expect(getByTestId("tt-icon")).toHaveAttribute("href", "https://twitter.com");
});
// snapshot
it("matches snapshot", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
