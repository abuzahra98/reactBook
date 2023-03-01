import style from "./SignupForm.module.css";
import React, { useState } from "react";
import api from "../../api";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    img: "",
    password: "",
    email: "",
  });

  function handleFileUpload(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setFormData((prevstate) => ({ ...prevstate, img: reader.result }));
    };
    reader.readAsDataURL(file);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await api.post("/users", formData);
    // response.statusText === "OK" ? props.onSubmit() : console.log(response);
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
      <label className={style["form-card"]}>User Name</label>
      <input
        className={style.input}
        type="text"
        name="user_name"
        value={formData.user_name}
        onChange={handleChange}
      />
      <label className={style["form-card"]}>Email</label>
      <input
        className={style.input}
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label className={style["form-card"]}>Password</label>
      <input
        className={style.input}
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <label className={style["form-card"]}>Image</label>
      <div className={style.imageInput}>
        <input type="file" onChange={handleFileUpload} />
        {formData.img && (
          <img className={style.preImage} src={formData.img} alt="Uploaded" />
        )}
      </div>
      <button className={style["submit-btn"]} type="submit">
        Signup
      </button>
    </form>
  );
};

export default SignupForm;
