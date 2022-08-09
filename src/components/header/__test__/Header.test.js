import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { unmountComponentAtNode } from "react-dom";

// component
import Header from "./../Header";

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
it("renders with or without a name", () => {
  render(<Header />, container);
});
// snapshot
it("matches snapshot", () => {
  let tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
