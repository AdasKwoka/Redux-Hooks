import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeRate, select } from '../actions/rateActions';

import Form from './Form';

const Comment = ({author, comment, id, rate}) => {
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  const handleChangeVisibility = () => setIsVisible(prev => !prev);
  const handleDeleteOnClick = () => {
    dispatch(removeRate({id}))
    dispatch(select({type: document.querySelector('select').value}))
  }
  const elementToShow = isVisible
  ? <div><Form callback={handleChangeVisibility} id={id}/><div className="errC"></div></div>
  : <button onClick={handleChangeVisibility}>Edit</button>

  return (
    <li>
      <p>Author: {author}</p>
      <p>Rate: {rate}</p>
      <p>Comment: {comment}</p>
      {elementToShow}
      {isVisible ? null : <button onClick={handleDeleteOnClick}>Delete</button>}
    </li>
  );
}
 
export default Comment;