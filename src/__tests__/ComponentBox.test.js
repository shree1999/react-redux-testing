import React from "react";
import { mount } from "enzyme";

import { CommentBox } from "../components/CommentBox";

let component;

beforeEach(() => {
  component = mount(<CommentBox />);
});

afterEach(() => {
  component.unmount();
});

it("shows the textarea and button", () => {
  expect(component.find("textarea").length).toEqual(1);
  expect(component.find("button").length).toEqual(1);
});
