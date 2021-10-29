import React, { useEffect, useState } from "react";
import ListFriends from "./ListFriends";
import FriendRequestAndSuggestions from "./FriendRequestAndSuggestions";
import addFriendImg from "../../assets/image/add-friends.png";
import groupImg from "../../assets/image/group.png";
import { useDispatch, useSelector } from "react-redux";
import {
    getFriendsListFromServer,
    getFriendsRequestFromServer,
    getGroupsChatList,
} from "../../redux/action/actFriends";
import Groups from "./Groups";
import HeaderOfBoxChat from "../homePage/HeaderOfBoxChat";
import BoxChat from "../homePage/BoxChat";
import SendMessage from "../homePage/SendMessage";
import HeaderOfInfoRoom from "../../components/HeaderOfInfoRoom";
import InfoOfRoom from "../../components/InfoOfRoom";
import OptionOfRoom from "../homePage/OptionOfRoom";
import { RESET_CURRENT_INBOX_ID, RESET_CURRENT_ROOM_ID } from "../../redux/constants/constants";
import { useHistory } from "react-router";

const FriendHome = () => {
    const dispatch = useDispatch();
    const friendsListFromStore = useSelector((state) => state.friendsList);
    const friendsRequestFromStore = useSelector((state) => state.friendsRequest);
    const currentInboxId = useSelector((state) => state.currentInboxId);
    const currentRoomId = useSelector((state) => state.currentRoomId);
    const authentication = useSelector((state) => state.authentication);

    const history = useHistory()
    let [index, setindex] = useState(-2);

    useEffect(() => {
      
        dispatch({
            type: RESET_CURRENT_INBOX_ID,
        });

        dispatch({
            type: RESET_CURRENT_ROOM_ID,
        });

        dispatch(getFriendsListFromServer());
        dispatch(getFriendsRequestFromServer());
        dispatch(getGroupsChatList());

        

    }, [dispatch, authentication, history]);

    const changeOptions = (option) => {
        setindex(option);

        dispatch({
            type: RESET_CURRENT_INBOX_ID,
        });
    };

    return (
        <div>
            {authentication.isLoggin && (
                <div className="friendhome bg-light">
                    <div className="friendhome__friend-list">
                        <div>
                            <div className="friend row p-3  " onClick={() => changeOptions(-1)}>
                                <div className="col-3 center">
                                    <div className="friend__img">
                                        <img src={addFriendImg} alt="" />
                                    </div>
                                </div>

                                <div className="col-9 d-flex align-items-center">
                                    <div className=" text-medium">
                                        <b className="text-danger">
                                            ({friendsRequestFromStore.length})
                                        </b>
                                        &nbsp; Danh sách kết bạn
                                    </div>
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
                        <h4>&nbsp;&nbsp;Bạn bè ({friendsListFromStore.length})</h4>
                        <ListFriends friends={friendsListFromStore} />
                    </div>
                    {currentInboxId ? (
                        <>
                            <div className="box-chat-container">
                                <HeaderOfBoxChat />
                                <BoxChat />
                                <SendMessage roomId={currentRoomId} />
                            </div>
                            <div className="info-room-right">
                                <HeaderOfInfoRoom />
                                <div className="info-room-right__scroll">
                                    <InfoOfRoom />
                                    <OptionOfRoom roomId={currentRoomId} />
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="col-9">
                            {index === -1 ? (
                                <FriendRequestAndSuggestions
                                    friendsRequestFromStore={friendsRequestFromStore}
                                />
                            ) : (
                                <Groups />
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default FriendHome;
