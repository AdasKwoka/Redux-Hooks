import { SELECT } from "../actions/rateActions";

const initilaizeState = [
  {
    id: Math.floor(Math.random() * 12345),
    type: "img1",
  },
  {
    id: Math.floor(Math.random() * 32452),
    type: "img2",
  },
  {
    id: Math.floor(Math.random() * 66572),
    type: "img3",
  },
]

const bookReducer = (state = initilaizeState, action) => {
  switch(action.type) {
    case SELECT:
      state = initilaizeState;
      return state.filter(book => book.type === action.payload.type);
    default:
      state = initilaizeState;
      return state.filter(book => book.type === "img1");
  }
}

export default bookReducer;