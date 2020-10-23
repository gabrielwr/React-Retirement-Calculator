import React from "react";
import { AgeForm } from "../";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<AgeForm lifeExpectancy={90} startingAge={28} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
