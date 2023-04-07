import React from "react";
import CardComp from "../components/Card/CardComp";

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
        <CardComp onSubmit={props.onSubmit} items={props.data} />
      </div>
    </>
  );
};

export default Home;
