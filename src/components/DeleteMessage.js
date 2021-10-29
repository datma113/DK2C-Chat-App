import React from "react";
import { deleteMessage } from "../redux/action/actHome";

const DeleteMessage = ({ messageId }) => {
     const deleteMessageHandle = () => {
          deleteMessage(messageId);
     }
    return (
        <>
            <div className="single-chat-box__message__delete">
                ...
                <div
                    className="single-chat-box__message__delete__options"
                    type="button"
                    data-mdb-toggle="modal"
                    data-mdb-target={`#deleteMessageModal`}
                >
                    <div className="text-small text-danger center">gỡ tin nhắn</div>
                </div>
            </div>
            <div
                className="modal fade"
                id={`deleteMessageModal`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Xóa tin nhắn
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-mdb-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">Bạn có muốn xóa tin nhắn này không?</div>
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
                                onClick={() => deleteMessageHandle()}
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

export default DeleteMessage;
