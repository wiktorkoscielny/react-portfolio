import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

//component
import Contact from "./../Contact";

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
  render(<Contact />, container);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Contact />);
  expect(getByTestId("button")).toHaveTextContent("Send Message");
});

test("section has Contact Me text", () => {
  render(<Contact />);
  const textElement = screen.getByText(/Contact Me/i);
  expect(textElement).toBeInTheDocument();
});

//snapshot
it("matches snapshot", () => {
  const tree = renderer.create(<Contact />).toJSON();
  expect(tree).toMatchSnapshot();
});
