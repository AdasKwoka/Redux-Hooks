import React from 'react';
import { Provider } from 'react-redux';
import Book from './components/Book';
import CommentList from './components/CommentList';

import Form from './components/Form'
import store from './store/store';

import './styles/App.css'

const App = () => {
  return ( 
    <Provider store={store}>
      <Form />
      <Book />
      <CommentList />
    </Provider>
   );
}
 
export default App;
