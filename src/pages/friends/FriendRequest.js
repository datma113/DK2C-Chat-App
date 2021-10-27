import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { acceptFriendRequest, declineFriendRequest } from "../../redux/action/actFriends";
const FriendRequest = () => {
    const dispatch = useDispatch();
    const friendsRequestFromStore = useSelector((state) => state.friendsRequest);

    const [friendsRequest, setfriendsRequest] = useState(friendsRequestFromStore);
    const acceptFriendRequestOnClick = (friendRequest, index) => {
        dispatch(acceptFriendRequest(friendRequest.id));
        let temp = [...friendsRequest];
        temp.splice(index, 1);
        setfriendsRequest(temp);
        Swal.fire(
            "Kết bạn thành công!",
            `Bạn và ${friendRequest.displayName} đã trở thành bạn bè`,
            "success"
        );
    };
    const declineFriendRequestOnClick = (friendRequest, index) => {
        dispatch(declineFriendRequest(friendRequest.id));
        let temp = [...friendsRequest];
        temp.splice(index, 1);
        setfriendsRequest(temp);
        Swal.fire(
            "Đã từ chối lời mời kết bạn!",
            `Bạn đã từ chối lời mời kết bạn của ${friendRequest.displayName}`,
            "error"
        );
    };
    const friendRequestArrMap = friendsRequest.map((friendRequest, index) => {
        return (
            <div key={index}>
                {" "}
                <div className="p-3 card">
                    <div className="card-body row">
                        <div className="col-1">
                            <div className="friend__img">
                                <img src={friendRequest.from.imageUrl} alt="" />
                            </div>
                        </div>
                        <div className="col-9">
                            <h5 className="card-title friend__display" type="button">
                                <b>{friendRequest.from.displayName}</b>
                            </h5>
                            <p>
                                <h6>{friendRequest.createAt}</h6>
                                <h6>"Message (Chưa có)"</h6>
                            </p>
                        </div>

                        <div className=" col-2 ">
                            <button
                                type="button"
                                className="btn btn-light"
                                onClick={() =>
                                    declineFriendRequestOnClick(friendRequest.from, index)
                                }
                            >
                                Từ chối
                            </button>{" "}
                            &nbsp;
                            <button
                                type="button"
                                className="btnFriendAccept btn btn-primary "
                                onClick={() => acceptFriendRequestOnClick(friendRequest.from)}
                            >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
        );
    });
    return (
        <>
            <div className=" ">{friendRequestArrMap}</div>
            <br></br>
        </>
    );
};

export default FriendRequest;
