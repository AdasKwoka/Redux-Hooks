import React from 'react';
import { useSelector } from 'react-redux';

import Comment from './Comment';

import '../styles/CommentList.css'

const CommentList = () => {
  const rates = useSelector(store => store.rates);
  const books = useSelector(store => store.books);
  const ratesList = rates.map(rate => {
    if(rate.type === books[0].type) return <Comment key={rate.id} {...rate} />
  })
  return (
    <div className="comment-list">
      <h2>Komentarze: </h2>
      <ul>
        {ratesList}
      </ul>
    </div>
  );
}
 
export default CommentList;