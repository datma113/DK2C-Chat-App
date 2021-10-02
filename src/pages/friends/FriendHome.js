import React, { useEffect, useState } from 'react'
import ListFriends from './ListFriends'
import FriendRequestAndSuggestions from './FriendRequestAndSuggestions'

import addFriendImg from '../../assets/image/add-friends.png';
import groupImg from '../../assets/image/group.png';
import { useDispatch, useSelector } from "react-redux";
import { getFriendsListFromServer, getFriendsRequestFromServer, getGroupsChatList } from '../../redux/action/actFriends'
import Groups from './Groups';
const FriendHome = () => {
    const dispatch = useDispatch();
    let [index, setindex] = useState(-2)
    const friendsListFromStore = useSelector((state) => state.friendsList);
    let friendsList = [...friendsListFromStore]
   
    useEffect(() => {
        dispatch(getFriendsListFromServer());
        dispatch(getFriendsRequestFromServer());
        dispatch(getGroupsChatList());


    }, [])
    const changeOptions = (option) => {
        setindex(option)
    }

    return (
        <div className="friendhome">

            <div className="friendhome__friend-list" >
                <div>
                    <div className="friend row p-3  " onClick={() => changeOptions(-1)}>

                        <div className="col-3 center">
                            <div className="friend__img">
                                <img src={addFriendImg} alt="" />
                            </div>
                        </div>

                        <div className="col-9 d-flex align-items-center">
                            <div className=" text-medium">Danh sách kết bạn</div>
                        </div>


                    </div>
                    <div className="friend row p-3 " onClick={() => changeOptions(-2)}>

                        <div className="col-3 center">
                            <div className="friend__img">
                                <img src={groupImg} alt="" />
                            </div>
                        </div>

                        <div className="col-9 d-flex align-items-center">
                            <div className=" text-medium">Danh sách nhóm</div>
                        </div>


                    </div>
                </div>

                <hr className="" />
                <h4>&nbsp;&nbsp;Bạn bè ({friendsList.length})</h4>
                <ListFriends friends={friendsList} />
            </div>

            <div className="col-9">
                {index === -1 ? <FriendRequestAndSuggestions  /> : <Groups />}
            </div>

        </div>
    )
}

export default FriendHome
