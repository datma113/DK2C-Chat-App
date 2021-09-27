import React from "react";
import TextInput from "../components/TextInput";

const EditRoomName = ({ currentInbox }) => {
    const renderEditRoomName = () => {
        return (
            <div className="edit-room-name center flex-column">
                <img className="edit-room-name__img" src={currentInbox.imgUrl} alt="" />
                <p className="text-center text-medium mb-5 mt-3">
                    Bạn chắc chắn có muốn đổi tên nhóm? khi xác nhận, tên nhóm mới sẽ hiển thị với
                    tất cả thành viên
                </p>
                <TextInput id="editRoomNameInput" label="Nhập tên nhóm mới" type="text" />
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
                            <button type="button" className="btn btn-lg btn-secondary">
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
