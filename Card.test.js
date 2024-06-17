import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

// smoke test
it("renders without crashing", function() {
  render(<Card caption={TEST_IMAGES[0].caption} src={TEST_IMAGES[0].src} currNum={1} totalNum={1} />);
});

// snapshot test
it("matches snapshot", function() {
    const {asFragment} = render(<Card caption={TEST_IMAGES[0].caption} src={TEST_IMAGES[0].src} currNum={1} totalNum={1} />);
    expect(asFragment()).toMatchSnapshot();
});