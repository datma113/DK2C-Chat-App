import React from 'react'

const Friend = (props) => {
    let friend = props.friendObj.friend
    return (
        // <div className="friend row p-3 friend--active">
        <div className="friend row p-3 ">

            <div className="col-3 center">
                <div className="friend__img">
                    <img src={friend.imageUrl} alt="" />
                </div>
            </div>

            <div className="col-9 d-flex align-items-center">
                    <div className=" text-medium">{friend.displayName}</div>
            </div>


        </div>
    )
}

export default Friend
