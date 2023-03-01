import style from "./AddForm.module.css";
import React, { useState } from "react";
import api from "../../api";

const AddForm = (props) => {
//    const [base64String, setBase64String] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    image: "",
  });

  function handleFileUpload(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        setFormData(prevstate=>({...prevstate, image:reader.result}));
    };
    reader.readAsDataURL(file);
   }

  const handleSubmit = async (event) => {
    event.preventDefault();
     const response = await api.post("/books", formData);
    response.statusText === "OK" ? props.onSubmit() : console.log(response);
 
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form className={style.card} onSubmit={handleSubmit}>
      <label className={style["form-card"]}>
        Title
        <input
          className={style.input}
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label className={style["form-card"]}>
        Image
        {/* <input className={style.input} type="text" name="image" value={formData.image} onChange={handleChange} /> */}
        <div className={style.imageInput}>
          <input type="file" onChange={handleFileUpload} />
          {formData.image && <img className={style.preImage} src={formData.image} alt="Uploaded" />}
        </div>
      </label>
      <button className={style["submit-btn"]} type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddForm;
