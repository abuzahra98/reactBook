import style from './AddForm.module.css';
import React, { useState } from 'react';
import api from '../../api';

const AddForm = (props) => {
    const [formData, setFormData] = useState({
        title: '',
        image: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        const response = await api.post('/books', formData);
        response.statusText === "OK" ? props.onSubmit() : console.log(response);

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    return (
        <form className={style.card} onSubmit={handleSubmit}>
            <label className={style["form-card"]}>
                Title
                <input className={style.input} type="text" name="title" value={formData.title} onChange={handleChange} />
            </label>
            <label className={style["form-card"]}>
                Image
                <input className={style.input} type="text" name="image" value={formData.image} onChange={handleChange} />
            </label>
            <button className={style["submit-btn"]} type="submit">Submit</button>
        </form>
    );

}


export default AddForm
