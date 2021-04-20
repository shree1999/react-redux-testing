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

describe("the text area", () => {
  // this before each will be scoped only for this describe block
  beforeEach(() => {
    component.find("textarea").simulate("change", {
      target: { value: "New Comment" },
    });

    component.update();
  });

  it("allows user to enter text in textarea", () => {
    // change event is the html change that should be added.
    // this test only works when there is controlled input/textarea
    expect(component.find("textarea").prop("value")).toEqual("New Comment");
  });

  it("submit the text and empty the text area", () => {
    // test to simulate form submit and make sure that textarea is empty
    expect(component.find("textarea").prop("value")).toEqual("New Comment");

    component.find("form").simulate("submit");
    component.update();
    expect(component.find("textarea").prop("value")).toEqual("");
  });
});
