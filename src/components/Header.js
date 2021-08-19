import React from 'react'
import logo from '../assets/image/LOGO.png'

const Header = () => {
    return (
        <>
            <div className=" row bg  align-items-center ">
                <div className="col-1 p-2"> <img src={logo} style={{height: "50px",width:"50px"}} /></div>
                <div className="hover col-1 p-2"> <i className=" fas fa-comments  "></i> </div>
                <div className="hover col-1 p-2"><i class="fas fa-users"></i> </div>
                <div className="hover col-1 p-2"> <i class="fas fa-file"></i> </div>
                <div className="hover col-1 p-2"> <i class="fas fa-folder"></i> </div>
                <div className="hover col-5 p-2">  </div>
                <div className="col-2 row">
                <div className="hover col-3 p-2"> <i class="fas fa-list-ul"></i> </div>
                <div className="hover col-3 p-2"> <i class="fas fa-list-ul"></i> </div>
                <div className="hover col-3 p-2"> <i class="fas fa-sign-in-alt"></i></div>
                </div>
            </div>
        </>
    )
}

export default Header
