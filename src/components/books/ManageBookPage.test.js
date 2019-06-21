import React from "react";
import { mount } from "enzyme";
import { authors, newBook, books } from "../../../tools/mockData";
import { ManageBookPage } from "./ManageBookPage";

function render(args) {
  const defaultProps = {
    authors,
    books,
    // Passed from React Router in real app, so just stubbing in for test.
    // Could also choose to use MemoryRouter as shown in Header.test.js,
    // or even wrap with React Router, depending on whether I
    // need to test React Router related behavior.
    history: {},
    saveBook: jest.fn(),
    loadAuthors: jest.fn(),
    loadBooks: jest.fn(),
    book: newBook,
    match: {}
  };

  const props = { ...defaultProps, ...args };

  return mount(<ManageBookPage {...props} />);
}

it("sets error when attempting to save an empty title field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is required.");
});
