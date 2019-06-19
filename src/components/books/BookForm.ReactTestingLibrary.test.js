import React from "react";
import { cleanup, render } from "react-testing-library";
import BookForm from "./BookForm";

afterEach(cleanup);

function renderBookForm(args) {
  let defaultProps = {
    authors: [],
    book: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<BookForm {...props} />);
}

it("should render Add Book header", () => {
  const { getByText } = renderBookForm();
  getByText("Add Book");
});

it('should label save button as "Save" when not saving', () => {
  const { getByText } = renderBookForm();
  getByText("Save");
});

it('should label save button as "Saving..." when saving', () => {
  const { getByText, debug } = renderBookForm({ saving: true });
  // debug();
  getByText("Saving...");
});
