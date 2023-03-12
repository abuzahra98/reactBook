import style from "./SigninForm.module.css";
import React, { useState } from "react";
import api from "../../api";

const SigninForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
   const res =  await api.post("/signin", formData);
     localStorage.setItem('token',res.data.token)
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
      <label className={style["form-card"]}>Password</label>
      <input
        className={style.input}
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button className={style["submit-btn"]} type="submit">
        Signin
      </button>
    </form>
  );
};

export default SigninForm;
