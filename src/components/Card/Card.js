import React from 'react';
import './Card.css';

const card = ({ items }) => {
    console.log(items);
    return (
        <div className='App'>

            {items.map(book => (
                <div className='card-container' key={book.id}>
                    <h1>{book.id}</h1>
                    <div>  <span className='Title'  >Title:</span>   {book.title}</div>
                    <img className='card-image' alt='dd' src={book.image} />
                    <button className="delete-btn"  >delete</button>
                </div>
            ))}
        </div>
    );

}

export default card
