import './AddForm.css';
import React, { useState } from 'react';
import api from '../../../src/api';

const AddForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        image: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        const response = api.post('/books', formData);
        console.log(response);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    return (
        <form className='card' onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
            </label>
            <label>
                Image:
                <input type="text" name="image" value={formData.image} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );

}


export default AddForm
