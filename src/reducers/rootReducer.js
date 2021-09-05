import { combineReducers } from 'redux';

import bookReducer from './bookReducer';
import rateReducer from './rateReducer';

export const rootReducer = combineReducers({
  books: bookReducer,
  rates: rateReducer,
})