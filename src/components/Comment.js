import React, { useState } from 'react';

import Form from './Form';

const Comment = ({author, comment, id, rate}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeVisibility = () => setIsVisible(prev => !prev);

  const elementToShow = isVisible
  ? <div><Form callback={handleChangeVisibility} id={id}/><div className="errC"></div></div>
  : <button onClick={handleChangeVisibility}>Edit</button>

  return (
    <li>
      <p>Author: {author}</p>
      <p>Rate: {rate}</p>
      <p>Comment: {comment}</p>
      {elementToShow}
    </li>
  );
}
 
export default Comment;