import * as types from "../actions/actionTypes";

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.book }];
    default:
      return state;
  }
}
