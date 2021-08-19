import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/image/LOGO.png'

const Header = () => {
    return (
        <>
            <div className=" row bg  align-items-center ">
                <div className="col-1 p-2" type="button"> <img src={logo} style={{ height: "50px", width: "50px" }} /></div>

                <NavLink className="header col-1 p-2 " activeClassName="header__active col-1 p-2" to="/message" > <i className=" fas fa-comments"></i> </NavLink>

                <NavLink className="header col-1 p-2" activeClassName="header__active col-1 p-2" to="/welcome"><i className="fas fa-users"></i> </NavLink>
                <NavLink className="header col-1 p-2" activeClassName="header__active col-1 p-2" to="/login"> <i className="fas fa-file"></i> </NavLink>
                <NavLink className="header col-1 p-2" to="/register"> <i className="fas fa-folder"></i> </NavLink>
                <div className="col-5 p-2">  </div>
                <div className="col-2 row">
                    <NavLink className="header col-3 p-2" type="button" to="/"> <i className="fas fa-list-ul"></i> </NavLink>
                    <NavLink className="header col-3 p-2" type="button" to="/"> <i className="fas fa-list-ul"></i> </NavLink>
                    <NavLink className="header col-3 p-2" type="button" to="/"> <i className="fas fa-sign-in-alt"></i></NavLink>
                </div>
            </div>
        </>
    )
}

export default Header
