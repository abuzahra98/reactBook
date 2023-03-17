import React, { useState, useEffect } from "react";
import api from "../../src/api";

const ItemDetails = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = urlSearchParams.get("id");
    console.log(id);
    const response = await api.get(`/books/${id}`);
    setData(response.data);
   };

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className="mainContainer" >
      {data.map((book) => (
        <div key={book.id}>
          <img alt="dd" src={book.image} />
          {/* <h1>{book.id}</h1> */}
          <div>
            {" "}
            <span>Title:</span> {book.title}
          </div>
          <div>
            {" "}
            <span>Description:</span> {book.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemDetails;
