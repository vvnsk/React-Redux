import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as bookActions from "./actions/bookActions";

it("Should handle creating books", function() {
  // arrange
  const store = createStore(rootReducer, initialState);
  const book = {
    title: "Clean Code"
  };

  // act
  const action = bookActions.createBookSuccess(book);
  store.dispatch(action);

  // assert
  const createdBook = store.getState().books[0];
  expect(createdBook).toEqual(book);
});
