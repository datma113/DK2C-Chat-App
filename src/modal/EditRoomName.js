import React from "react";

const EditRoomName = () => {
    return (
        <>
            <i
                type="button"
                className="fas fa-edit info-room__edit "
                data-mdb-toggle="modal"
                data-mdb-target="#editRoomName"
            ></i>

            <div
                class="modal fade"
                id="editRoomName"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                               Đổi tên nhóm
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-mdb-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">Đôi tên nhóm</div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-lg btn-light"
                                data-mdb-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" class="btn btn-lg btn-secondary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditRoomName;
