import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AddFriend from "../components/AddFriend";
import { addFriend, getFriendsListFromServer } from "../redux/action/actFriends";
import { getUsers } from "../redux/action/actHome";
import { CLEAR_USERS_SEARCHED } from "../redux/constants/constants";

const AddfriendModal = () => {
    const dispatch = useDispatch();
    const usersSearched = useSelector((state) => state.usersSearched);
    const authentication = useSelector(state => state.authentication)

    const getUsersHandle = (query = "") => {
        const VALID_USER_LENGTH = 10;
        const LENGTH_QUERY = query.length;
        console.log(query);
        if (LENGTH_QUERY >= VALID_USER_LENGTH) dispatch(getUsers(query));
    };

    const isMyself = () => {
        return authentication.user.id === usersSearched.id
    }

    const addFriendHandle = (userId) => {
        addFriend(userId);
    };

    const initialDataWhenOpenModal = () => {
        dispatch({
            type: CLEAR_USERS_SEARCHED,
        });
        
        dispatch(getFriendsListFromServer());
    };

    return (
        <>
            <i
                className="header-inbox-container__icon fas fa-user-plus  text-small text-success"
                data-mdb-toggle="modal"
                data-mdb-target={`#addfriendModal`}
                onClick={() => initialDataWhenOpenModal()}
            ></i>

            <div
                className="modal fade"
                id={`addfriendModal`}
                tabIndex="1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog add-friends-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Tìm người dùng
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-mdb-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-center">
                        
                            <AddFriend
                                users={usersSearched}
                               
                                functionWhenClick={() => {
                                    addFriendHandle(usersSearched.id);
                                }}
                                handleOnChange={(e) => {
                                    getUsersHandle(e.target.value);
                                }}
                                isMyself={isMyself()}
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-light btn-lg"
                                data-mdb-dismiss="modal"
                            >
                                Trở lại
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddfriendModal;
