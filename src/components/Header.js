import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../assets/image/LOGO.png";
import Swal from "sweetalert2";

import { logout } from "../redux/action/actLogin";
import { useSelector } from "react-redux";
const Header = () => {
    const dispatch = useDispatch();
    const authentication = useSelector(state => state.authentication)
    const logoutHandle = () => {
        dispatch(logout())
            .then(() => {
                window.location.reload();
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    html: `<div className="text-normal text-center text-danger"> ${err} </div>`,
                });
            });
    };
    return (
        <>
            <div className="navbar navbar-expand-lg bg ">
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
                        to="/friends"
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
                    <div className="col-1"></div>
                    <div className="col-1 p-2 row align-center container">
                        <div className="dropdown">
                            <div
                                className=""
                                type="button"
                                id="dropdownExampleAnimation"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                                data-mdb-dropdown-animation="off"
                            >
                                <img
                                    src={authentication.user.imageUrl}
                                    className="rounded-circle"
                                    height="25"
                                    alt=""
                                    loading="lazy"
                                />
                            </div>
                            <ul className="dropdown-menu ">
                                <li className="p-1">
                                    <h3 className="dropdown-item" href="#">
                                        Hồ sơ
                                    </h3>
                                </li>
                                <li>
                                    <h3 className="dropdown-item" href="#">
                                        Cài đặt
                                    </h3>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li type="button" onClick={() => logoutHandle()}>
                                    <h3 className="dropdown-item text-danger">
                                        <i className="fas fa-sign-out-alt fa-1x"></i> Đăng xuất
                                    </h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
