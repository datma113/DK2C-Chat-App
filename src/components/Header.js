import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/image/LOGO.png";

const Header = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg bg " >
        <div className=" w-100 align-items-center row">
          <NavLink
            className="nav-item col-2  p-2"
            activeClassName="nav-item col-2 p-2"
            to="/"
          >
            {" "}
            <img src={logo} alt="" style={{ height: "50px", width: "50px" }} />
          </NavLink>
          <NavLink
            className="nav-item col-2 header p-2"
            activeClassName="nav-item col-2 header__active  p-2"
            to="/message"
          >
            {" "}
            <i className=" fas fa-comments"></i>{" "}
          </NavLink>
          <NavLink
            className="nav-item col-2  header p-2"
            activeClassName="nav-item col-2   header__active  p-2"
            to="/welcome"
          >
            <i className="fas fa-users"></i>{" "}
          </NavLink>
          <NavLink
            className="nav-item col-2  header p-2"
            activeClassName="nav-item col-2   header__active  p-2"
            to="/login"
          >
            {" "}
            <i className="fas fa-file"></i>{" "}
          </NavLink>
          <NavLink
            className="nav-item col-2 header p-2"
            activeClassName="nav-item col-2   header__active  p-2"
            to="/register"
          >
            {" "}
            <i className="fas fa-folder"></i>{" "}
          </NavLink>
          <NavLink
            className="nav-item col-2 header p-2"
            activeClassName="nav-item col-2   header__active  p-2"
            to="/register"
          >
            {" "}
            <i className="fas fa-folder"></i>{" "}
          </NavLink>
          <div></div>
         
        </div>
      </div>
    </>
  );
};

export default Header;
