import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import TextInput from "../components/TextInput";
import { changeImageGroup, editRoomName, storeRoomName } from "../redux/action/actInfoRoom";
import { CLEAR_ROOM_NAME } from "../redux/constants/constants";

const EditRoomName = ({ currentInbox }) => {
    const roomName = useSelector((state) => state.roomName);
    const currentRoomId = useSelector((state) => state.currentRoomId);
    const dispatch = useDispatch();

    const isDisabled = () => {
        return roomName.name ? "" : "disabled";
    };

    const changeImageHandle = (e, roomId) => {
        const IMAGE = e.target.files[0];
        
        const formData = new FormData();
        formData.append("files", IMAGE);

        const inboxDto = {
            roomId,
            inboxId: currentInbox.id
        }

        dispatch(changeImageGroup(inboxDto, formData));
      
    };
    const renderEditRoomName = () => {
        return (
            <div className="edit-room-name center flex-column">
                <label htmlFor={`changeImageGroup${currentInbox.id}`}>
                    <img className="edit-room-name__img" src={currentInbox.imgUrl} alt="" />

                    <input
                        className="d-none"
                        type="file"
                        id={`changeImageGroup${currentInbox.id}`}
                        accept="image/gif,image/jpeg,image/jpg,image/png"
                        data-original-title="upload photos"
                        onChange={(e) => {
                            changeImageHandle(e, currentRoomId);
                        }}
                    />
                </label>
                <p className="text-center text-medium mb-5 mt-3">
                    Bạn chắc chắn có muốn đổi tên nhóm? khi xác nhận, tên nhóm mới sẽ hiển thị với
                    tất cả thành viên.
                </p>
                <TextInput
                    id="editRoomNameInput"
                    label="Nhập tên nhóm mới"
                    type="text"
                    functionToDispatch={storeRoomName}
                    keyStoreToReducer="name"
                />
            </div>
        );
    };
    return (
        <>
            <i
                type="button"
                className="fas fa-edit info-room__edit "
                data-mdb-toggle="modal"
                data-mdb-target="#editRoomName"
            ></i>

            <div
                className="modal fade"
                id="editRoomName"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Đổi tên nhóm
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-mdb-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">{renderEditRoomName()}</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-lg btn-light"
                                data-mdb-dismiss="modal"
                            >
                                Hủy
                            </button>
                            <button
                                type="button"
                                className={`btn btn-lg btn-secondary ${isDisabled()}`}
                                data-mdb-dismiss="modal"
                                onClick={() => {
                                    dispatch(editRoomName(currentRoomId, roomName)).then(() =>
                                        dispatch({
                                            type: CLEAR_ROOM_NAME,
                                        })
                                    );
                                }}
                            >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditRoomName;
