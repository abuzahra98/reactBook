import React, { useState, useEffect } from 'react';
import CardItem from './components/Card/Card';
import AddForm from './components/AddForm/AddForm';
import './App.css';
import api from '../src/api';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/books');
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <CardItem items={data} />
      <div className='form-container'>
        <AddForm />
      </div>
    </div>
  );
}

export default App;