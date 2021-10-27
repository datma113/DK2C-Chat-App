import React from "react";

const CreateRoomWithMems = () => {
    return (
        <>
            <i
                className="header-inbox-container__icon fas fa-users text-small"
                data-mdb-toggle="modal"
                data-mdb-target={`#createRoomWithMemsModal`}
            ></i>

            <div
                className="modal fade"
                id={`createRoomWithMemsModal`}
                tabIndex="1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Tạo nhóm
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-mdb-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-center">
                            <p> Bạn có muốn hủy kết bạn với người này không? </p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-light btn-lg"
                                data-mdb-dismiss="modal"
                            >
                                Hủy
                            </button>
                            <button
                                type="button"
                                className={`btn btn-danger btn-lg `}
                                data-mdb-dismiss="modal"
                            >
                                xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateRoomWithMems;
