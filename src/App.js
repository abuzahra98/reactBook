import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header/Header';
import './App.css';
import api from '../src/api';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AddBook from './pages/AddBook';
import SignUp from './pages/SignUp';
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
      <Header/>
      <Routes>


        <Route path="/" element={<Home data={data} onSubmit={getData} />} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/addBook" element={<AddBook onSubmit={getData} />}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
        
        
      
    
    
      
    </>
  );
}

export default App;