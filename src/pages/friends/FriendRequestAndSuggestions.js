import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import addFriendImg from '../../assets/image/add-friends.png';
import FriendRequest from './FriendRequest';

const FriendRequestAndSuggestions = () => {
    
   const friendsRequestFromStore = useSelector((state) => state.friendsRequest);
    return (
        <div className="row container">
            <div className="col-12  " >
                <div className="headerFriend row p-3 ">

                    <div className="col-1 ">
                        <div className="friend__img">
                            <img src={addFriendImg} alt="" />
                        </div>
                    </div>

                    <div className="col-9 d-flex align-items-center">
                        <div className=" text-large">Danh sách kết bạn</div>
                    </div>


                </div>
            </div>
            <br />
            <div className=" friendhome__friendRequest-list col-12 gap-3">
                <div className="col-12" style={{ height: "20px" }}></div>
                <div className=" col-12"><h4>&nbsp;Lời mời kết bạn ({friendsRequestFromStore.length})</h4></div>
                <div>
                    <FriendRequest />

                </div>
               
            </div>
        </div>
    )
}

export default FriendRequestAndSuggestions
