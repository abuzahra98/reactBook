import React from 'react';
import style from './Card.module.css';

const card = ({ items }) => {
     return (
        <div className='App'>

            {items.map(book => (
                <div className={style["card-container"]} key={book.id}>
                    <h1>{book.id}</h1>
                    <div>  <span  className={style.Title}  >Title:</span>   {book.title}</div>
                    <img className={style["card-image"]} alt='dd' src={book.image} />
                    <button className={style["delete-btn"]} >delete</button>
                </div>
            ))}
        </div>
    );

}

export default card
