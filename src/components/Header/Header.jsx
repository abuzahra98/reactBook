import style from "../Header/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className={style.logoContainer}>
        <img className={style.logo} alt="logo" src="logo7.svg" />
      </div>
      <div className={style.headrComponent}>
        <div className={style.headerLabel}>
          <Link className={style.headerLabel} to="/">
            Home
          </Link>
        </div>
        <div className={style.headerLabel}>
          <Link className={style.headerLabel} to="/contact">
            Contact Us
          </Link>
        </div>

        <div className={style.headerLabel}>
          <Link className={style.headerLabel} to="/about">
            AboutUs
          </Link>
        </div>

        <div className={style.headerLabel}>
          <Link className={style.headerLabel} to="/addBook">
            Add Book
          </Link>
        </div> 
        
        <div className={style.headerLabel}>
          <Link className={style.headerLabel} to="/signup">
            SignUp
          </Link>
        </div>
        
        <div className={style.headerLabel}>
          <Link className={style.headerLabel} to="/signin">
            SignIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
