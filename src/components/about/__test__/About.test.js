import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { unmountComponentAtNode } from "react-dom";

// component
import About from "./../About";

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
  render(<About />, container);
});
//snapshot
it("matches snapshot", () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});
