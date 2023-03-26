import React from 'react';
import style from './Card.module.css';
import api from '../../api'
import { useNavigate } from "react-router-dom";

const CardComp = (props) => {
    const navigate = useNavigate();

    const deleteItem = async (id) => {
        const response = await api.delete(`/books/${id}`)
        console.log(response)
        if (response.status === 200) {
            response.statusText === "OK" ? props.onSubmit() : console.log(response);
        }
    }
    const detailsItem = async (id) => {
         navigate(`/ItemDetails?id=${id}`);
    }

    return (
        <div className='App'>
            {props.items.map(book => (
                <div onClick={()=>{detailsItem(book.id)}} className={style["card-container"]} key={book.id}>
                      <img className={style["card-image"]} alt='dd' src={book.image} />
                    {/* <h1>{book.id}</h1> */}
                    <div className={style["title-name"]}>  <span className={style.Title}  >Title:</span>   {book.title}</div>
                  
                    <button onClick={() => { deleteItem(book.id) }} className={style["delete-btn"]} >delete</button>
                </div>
            ))}
        </div>
    );

}

export default CardComp
