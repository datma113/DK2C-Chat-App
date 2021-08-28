import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/image/LOGO.png'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg row bg  align-items-center">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-list-ul header"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav w-100 align-items-center row">
                            <NavLink className="nav-item col-lg-1 col-sm-2  p-2" activeClassName="nav-item col-lg-1 col-sm-2  col-1 p-2" to="/" > <img src={logo} alt="" style={{ height: "50px", width: "50px" }} /></NavLink>
                            <NavLink className="nav-item col-lg-1 col-sm-2 header p-2" activeClassName="nav-item col-lg-1 col-sm-2  header__active col-1 p-2" to="/message" > <i className=" fas fa-comments"></i> </NavLink>
                            <NavLink className="nav-item col-lg-1 col-sm-2 header p-2" activeClassName="nav-item col-lg-1 col-sm-2  header__active col-1 p-2" to="/welcome"><i className="fas fa-users"></i> </NavLink>
                            <NavLink className="nav-item col-lg-1 col-sm-2 header p-2" activeClassName="nav-item col-lg-1 col-sm-2  header__active col-1 p-2" to="/login"> <i className="fas fa-file"></i> </NavLink>
                            <NavLink className="nav-item col-lg-1 col-sm-2 header p-2" activeClassName="nav-item col-lg-1 col-sm-2  header__active col-1 p-2" to="/register"> <i className="fas fa-folder"></i> </NavLink>
                            <div className="col-5 p-2">  </div>
                            <div className="col-lg-2 col-md-4 row">
                                <NavLink className="header col-lg-3 col-sm-2" type="button" to="/"> <i className="fas fa-list-ul"></i> </NavLink>
                                <NavLink className="header col-lg-3  col-sm-2" type="button" to="/"> <i className="fas fa-list-ul"></i> </NavLink>
                                <NavLink className="header col-lg-3 col-sm-2" type="button" to="/"> <i className="fas fa-sign-in-alt"></i></NavLink>
                            </div>



                        </div>

                    </div>


                </div>
            </nav>
        </>
    )
}

export default Header
