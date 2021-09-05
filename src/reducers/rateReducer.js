import { ADD_RATE, REMOVE_RATE, EDIT_RATE } from '../actions/rateActions';


const rateReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_RATE:
      return [...state, action.payload];
    case REMOVE_RATE:
      return state.filter(rate => rate.id !== action.payload.id);
    case EDIT_RATE:
      return state.map(rateElement => {
        if(rateElement.id !== action.payload.id) {
          return rateElement;
        }

        const { comment, rate } = action.payload;
        return ({
          author: rateElement.author,
          comment,
          id: rateElement.id,
          rate,
          type: rateElement.type,
        })
      });
    default:
      return state;
  }
}

export default rateReducer;