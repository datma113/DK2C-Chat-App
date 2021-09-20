import React, { useEffect, useState } from 'react'
import ListFriends from './ListFriends'
import FriendRequestAndSuggestions from './FriendRequestAndSuggestions'

import addFriendImg from '../../assets/image/add-friends.png';
import groupImg from '../../assets/image/group.png';
import { useDispatch, useSelector } from "react-redux";
import { getFriendsListFromServer } from '../../redux/action/actFriends'
import Groups from './Groups';
const FriendHome = () => {
    const dispatch = useDispatch();
    const [index, setindex] = useState(-1)
    const friendsList = useSelector((state) => state.friendsList);
    useEffect(() => {
        dispatch(getFriendsListFromServer());

    }, [])
    const changeOptions = (option) => {
        setindex(option)
    }

    return (
        <div className="friendhome">

            <div className="friendhome__friend-list" >
                {/* {friendsList.length()} */}
                {/* <GroupOrFriendsOption /> */}
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
                <h4>&nbsp;&nbsp;Bạn bè (5)</h4>
                <ListFriends />
                {/* <div style={{ height: "2000px" }}></div> */}
            </div>

            <div className="col-9">
                {index === -1 ? <FriendRequestAndSuggestions /> : <Groups/>}
            </div>

        </div>
    )
}

export default FriendHome
