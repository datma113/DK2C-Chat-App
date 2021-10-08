import React, { useState } from "react";
import { useSelector } from "react-redux";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import MyCustomModal from "./MyCustomModal";
import Friend from "../pages/friends/Friend";
import { addNewMembers, updateNewMembersInRoom } from "../redux/action/actInfoRoom";
import { useDispatch } from "react-redux";

const AddNewMembers = ({ friendsList }) => {
    const authentication = useSelector((state) => state.authentication);
    const currentRoomId = useSelector((state) => state.currentRoomId);
    const membersInRoom = useSelector((state) => state.membersInRoom);
    const dispatch = useDispatch();
    const [friendsAdded, setfriendsAdded] = useState([]);

    const [isEmptyFriendsAdded, setIsEmptyFriendsAdded] = useState(true);

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
        setfriendsAdded(friendsAddedClone);
    };

    const convertMembersInRoomData = membersInRoom.map((member) => member.user.id);

    const filterMembersAlreadyInRoom = friendsList.filter((friend) => {
        const FRIEND_ID = friend.friend.id;
        return !convertMembersInRoomData.includes(FRIEND_ID);
    });

    const confirmAddNewMember = () => {
        addNewMembers(friendsAdded, currentRoomId).then((newMembersInRoom) => {
            let friendsAddedClone = [...friendsAdded];
            friendsAddedClone.length = 0;
            setfriendsAdded(friendsAddedClone);
        
            dispatch(updateNewMembersInRoom(newMembersInRoom))
        });
    };

    const friendListMap = filterMembersAlreadyInRoom.map((friend, index) => {
        return (
            <div className="add-new-member-container row" key={index}>
                <div className="col-1 center">
                    <input
                        type="checkbox"
                        id={`addNewMembers${index}`}
                        onClick={(e) => {
                            changeStateMembersNeedToAdd(e, friend.friend.id);
                        }}
                    />
                </div>
                <label className="col-11" htmlFor={`addNewMembers${index}`}>
                    <Friend key={index} friendObj={friend} />
                </label>
            </div>
        );
    });

    const renderAddNewMembers = () => {
        return friendListMap.length > 0 ? friendListMap : <div>không có ai</div>;
    };
    return (
        <>
            <TagOfOptionRoom
                id="addNewMembers"
                classIcon="fas fa-user-plus"
                text="Thêm thành viên"
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
