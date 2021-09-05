import { createStore, applyMiddleware } from 'redux';
import { validationForm } from '../middleware/middleware';

import { rootReducer } from '../reducers/rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(validationForm)
  );
export default store;