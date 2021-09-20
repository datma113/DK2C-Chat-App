import React from 'react'
import groupImg from '../../assets/image/group.png';
import FriendRequest from './FriendRequest';
import ListGroups from './ListGroups';

const Groups = () => {
    return (
        <div className="row container">
            <div className="col-12  " >
                {/* <div className="w-100vh">abc</div> */}
                <div className="headerFriend row p-3 ">

                    <div className="col-1 ">
                        <div className="friend__img">
                            <img src={groupImg} alt="" />
                        </div>
                    </div>

                    <div className="col-9 d-flex align-items-center">
                        <div className=" text-large">Danh sách nhóm</div>
                    </div>


                </div>
            </div>
            <br />
            <div className=" friendhome__friendRequest-list col-12 gap-3">
                <div className="col-12" style={{ height: "20px" }}></div>
                <div className=" col-12"><h4>&nbsp;Tất cả (10)</h4></div>
                <div>
                   <ListGroups/>
                </div>
               
            </div>
        </div>
    )
}

export default Groups
