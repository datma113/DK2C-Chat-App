import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import MyCustomModal from "./MyCustomModal";
import Friend from "../pages/friends/Friend";
import { getFriendsListFromServer } from "../redux/action/actFriends";
import { addNewMembers } from "../redux/action/actInfoRoom";

const AddNewMembers = () => {
    const friendsList = useSelector((state) => state.friendsList);
    const authentication = useSelector((state) => state.authentication);
    const currentRoomId = useSelector((state) => state.currentRoomId);

    const [friendsAdded, setfriends_added] = useState([]);
    const [isEmptyFriendsAdded, setIsEmptyFriendsAdded] = useState(true);
    const dispatch = useDispatch();

    const checkEmptyFriendsAdded = (lengthOfFriendsAdded) => {
        return lengthOfFriendsAdded > 0
            ? setIsEmptyFriendsAdded(false)
            : setIsEmptyFriendsAdded(true);
    };

    const changeStateMembersNeedToAdd = (e, friendId) => {
        const STATUS_OF_CHECKBOX = e.target.checked;

        const friendInserted = {
            addByUserId: authentication.user.id,
            userId: friendId,
        };
        //need to clone friendsAdded cause it will solve delay one time of friendsAdded state
        let friendsAddedClone = [...friendsAdded];

        if (STATUS_OF_CHECKBOX) friendsAddedClone.push(friendInserted);
        else friendsAddedClone = friendsAddedClone.filter((friend) => friend.userId !== friendId);

        checkEmptyFriendsAdded(friendsAddedClone.length);
        setfriends_added(friendsAddedClone);
    };

    const confirmAddNewMember = () => {
        addNewMembers(friendsAdded, currentRoomId).then(() => {
            let friendsAddedClone = [...friendsAdded];
            friendsAddedClone.length = 0;
            setfriends_added(friendsAddedClone);
        });
    };

    const friendListMap = friendsList.map((friend, index) => {
        return (
            <div className="add-new-member-container row" key={index}>
                <div className="col-1 center">
                    <input
                        className="text-dark"
                        type="checkbox"
                        id={`addNewMembers${index}`}
                        onClick={(e) => changeStateMembersNeedToAdd(e, friend.friend.id)}
                    />
                </div>
                <label className="col-11" htmlFor={`addNewMembers${index}`}>
                    <Friend key={index} friendObj={friend} />
                </label>
            </div>
        );
    });

    const renderAddNewMembers = () => {
        return <>{friendListMap}</>;
    };
    return (
        <>
            <TagOfOptionRoom
                id="addNewMembers"
                classIcon="fas fa-user-plus"
                text="Thêm thành viên"
                functionWhenClick={() => dispatch(getFriendsListFromServer())}
            />
            <MyCustomModal
                inner={renderAddNewMembers()}
                headerTitle="Thêm thành viên"
                id="addNewMembers"
                functionWhenClick={() => confirmAddNewMember()}
                isDisabledConfirmBtn={isEmptyFriendsAdded}
            />
        </>
    );
};

export default AddNewMembers;
