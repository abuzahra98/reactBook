import React, { useState, useEffect } from "react";
import api from "../../src/api";
import CardItem from "../components/Card/CardComp";

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
        <CardItem onSubmit={props.onSubmit} items={props.data} />
      </div>
    </>
  );
};

export default Home;
