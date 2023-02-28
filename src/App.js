import React, { useState, useEffect } from 'react';
import CardItem from './components/Card/Card';
import AddForm from './components/AddForm/AddForm';
import './App.css';
import api from '../src/api';
import Header from '../src/components/Header/Header'
const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await api.get('/books');
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);



  return (
    <>
      <Header />
      <div className='mainContainer'>
        <CardItem onSubmit={getData} items={data} />
        <div className='form-container'>
          <AddForm onSubmit={getData} />
        </div>
      </div>
    </>
  );
}

export default App;