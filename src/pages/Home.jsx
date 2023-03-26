import React, { useState, useEffect } from "react";
import api from "../../src/api";
import CardComp from "../components/Card/CardComp";
 import LoadingComp from '../components/Loading/LoadingComp'
const Home = (props) => {
 
//   const [data, setData] = useState([]);

//   const getData = async () => {
//     const response = await api.get("/books");
//     setData(response.data);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

  return (
    <>
      <div className="mainContainer">
       <LoadingComp/>

        <CardComp onSubmit={props.onSubmit} items={props.data} />
      </div>
    </>
  );
};

export default Home;
