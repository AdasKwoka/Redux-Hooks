import React from 'react';
import { useSelector } from 'react-redux';

import img1 from '../images/img1.png';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

import '../styles/Book.css'

const Book = () => {
  const booksTitle = [{title:"5 seconds", type:"img1"},{title:"How to be the best", type:"img2"},{title: "How to grow up", type:"img3"}];
  const books = useSelector(store => store.books);

  const type = books[0].type;

  const styles = [
    {
      type: "img1",
      backgroundImage: img1,
    },
    {
      type: "img2",
      backgroundImage: img2,
    },
    {
      type: "img3",
      backgroundImage: img3,
    },
  ]

  const style = styles.filter(opt => {if(opt.type === type) return opt.backgroundImage});
  
  return ( 
    <div className="book">
      <div className="book-img" style={{backgroundImage: `url(${style[0].backgroundImage})`}}></div>
      <div className="book-title">{booksTitle.map(book => {if(book.type === type) return book.title})}</div>
    </div>
  );
}
 
export default Book;