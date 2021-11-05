import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../assets/image/LOGO.png";
import Swal from "sweetalert2";
import defaultAvatar from "../assets/image/LOGO.png";

import { logout } from "../redux/action/actLogin";
import { useSelector } from "react-redux";
import { getUserInfoFromServer } from "../redux/action/actProfile";
const Header = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.userInfo);

    useEffect(() => {
        dispatch(getUserInfoFromServer());
    }, [dispatch]);

    const history = useHistory();
    const logoutHandle = () => {
        dispatch(logout())
            .then(() => {
                history.push("/");
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
        <div className="navbar  p-2">
            <div className="header-left ">
                <NavLink
                    className="nav-item header-left__link center p-2"
                    activeClassName="nav-item  p-2"
                    to="/"
                >
                    <img src={logo} alt="" style={{ height: "50px", width: "50px" }} />
                </NavLink>

                <NavLink
                    className="nav-item center header-left__link  header p-2"
                    activeClassName="nav-item  header  header__active  p-2"
                    to="/friends"
                >
                    <i className="fas fa-users"></i>{" "}
                </NavLink>
            </div>

            <div className="header-right">
                <div className="dropdown">
                    <div
                        type="button"
                        id="dropdownExampleAnimation"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        data-mdb-dropdown-animation="off"
                    >
                        <img
                            src={userInfo.imageUrl ?? defaultAvatar}
                            className="header-img"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <ul className="dropdown-menu ">
                        <li className="p-1" >
                            <p
                                className="dropdown-item text-small"
                                href="#"
                                data-mdb-toggle="modal"
                                data-mdb-target="#openMyInfoModal"
                            >
                                Hồ sơ
                            </p>
                        </li>

                        <li>
                            <p className="dropdown-item text-small" href="#">
                                Cài đặt
                            </p>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li type="button" onClick={() => logoutHandle()}>
                            <p className="dropdown-item text-danger text-small">
                                <i className="fas fa-sign-out-alt fa-1x"></i> Đăng xuất
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
