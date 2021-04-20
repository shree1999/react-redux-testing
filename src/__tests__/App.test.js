// This file test the functionality of App component only
import React from "react";
import { shallow } from "enzyme";

import { App } from "../App";
import { CommentBox } from "../components/CommentBox";
import { CommentList } from "../components/CommentList";

let component;

beforeEach(() => {
  component = shallow(<App />);
});

it("should render comment box component", () => {
  expect(component.find(CommentBox).length).toEqual(1);
});

it("should render comment list component", () => {
  expect(component.find(CommentList).length).toEqual(1);
});
