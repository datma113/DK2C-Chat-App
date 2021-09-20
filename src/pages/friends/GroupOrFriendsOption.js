import React, { useState } from 'react'
import addFriendImg from '../../assets/image/add-friends.png';
import groupImg from '../../assets/image/group.png';

const GroupOrFriendsOption = () => {
    const [index, setindex] = useState(-1)
    return (
        <div>
            <div className="friend row p-3  ">

                <div className="col-3 center">
                    <div className="friend__img">
                        <img src={addFriendImg} alt="" />
                    </div>
                </div>

                <div className="col-9 d-flex align-items-center">
                    <div className=" text-medium">Danh sách kết bạn</div>
                </div>


            </div>
            <div className="friend row p-3 ">

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
    )
}

export default GroupOrFriendsOption
