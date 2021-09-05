import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addRate, editRate, select } from '../actions/rateActions';

import '../styles/Form.css'

const Form = ({
  author = "",
  callback,
  comment = "",
  id,
  rate = 0,
}) => {

  const dispatch = useDispatch();

  const [authorValue, setAuthorValue] = useState(author);
  const [commentValue, setCommentValue] = useState(comment);
  const [rateValue, setRateValue] = useState(rate);
  const [selectValue, setSelectValue] = useState("img1");

  const handleAuthorChange = e => setAuthorValue(e.target.value);
  const handleCommentChange = e => setCommentValue(e.target.value);
  const handleRateChange = e => setRateValue(e.target.value);

  const handleSelectChange = e => {
    setSelectValue(e.target.value);
    const objToSend = {
      type: e.target.value,
    }
    dispatch(select(objToSend));
  };

  const handleFormOnSubmit = e => {
    e.preventDefault();

    const objToSend = {
      author: authorValue,
      comment: commentValue,
      id,
      rate: Number(rateValue),
      type: selectValue
    }

    id ? dispatch(editRate(objToSend)) : dispatch(addRate(objToSend));
    if(id) {
      callback();
    }
    dispatch(select({type: document.querySelector('select').value}))
    setAuthorValue("");
    setCommentValue("");
    setRateValue(0);
  }

  return (
    <form onSubmit={handleFormOnSubmit}>
      {id ? null : <div><label>
        Author:
        <input type="text" value={authorValue} onChange={handleAuthorChange} />
      </label>
      <div className="errA"></div>
      </div>
      }
      <label>
        Rate:
        <input type="number" value={rateValue} onChange={handleRateChange} min={0} max={6}/>
      </label>
      <label>
        Comment:
        <input type="text" value={commentValue} onChange={handleCommentChange} />
      </label>
      <div className="errCF"></div>
      {id ? null : <label>
        Select a book:
        <select onChange={handleSelectChange} defaultValue={selectValue}>
          <option value="img1">5 seconds</option>
          <option value="img2">How to be the best</option>
          <option value="img3">How to grow up!</option>
        </select>
      </label> }
      <button type="submit">
        {id ? "Edit" : "Add"}
      </button>
    </form>
  );
}
 
export default Form;