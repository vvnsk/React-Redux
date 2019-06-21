import bookReducer from "./bookReducer";
import * as actions from "../actions/bookActions";

it("should add book when passed CREATE_BOOK_SUCCESS", () => {
  // arrange
  const initialState = [
    {
      title: "A"
    },
    {
      title: "B"
    }
  ];

  const newBook = {
    title: "C"
  };

  const action = actions.createBookSuccess(newBook);

  // act
  const newState = bookReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual("A");
  expect(newState[1].title).toEqual("B");
  expect(newState[2].title).toEqual("C");
});

it("should update book when passed UPDATE_BOOK_SUCCESS", () => {
  // arrange
  const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 3, title: "C" }
  ];

  const book = { id: 2, title: "New Title" };
  const action = actions.updateBookSuccess(book);

  // act
  const newState = bookReducer(initialState, action);
  const updatedBook = newState.find(a => a.id == book.id);
  const untouchedBook = newState.find(a => a.id == 1);

  // assert
  expect(updatedBook.title).toEqual("New Title");
  expect(untouchedBook.title).toEqual("A");
  expect(newState.length).toEqual(3);
});
