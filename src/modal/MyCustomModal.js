import React from "react";

const MyCustomModal = ({ id, headerTitle, inner, functionWhenClick, isDisabledConfirmBtn, color, dialogClass }) => {
    return (
        <>
            <div
                className="modal fade"
                id={id}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className={`modal-dialog ${dialogClass}`}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {headerTitle}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-mdb-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">{inner}</div>
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
                                className={`btn btn-${color || "primary"} btn-lg ${
                                    isDisabledConfirmBtn ? "disabled" : ""
                                }`}
                                data-mdb-dismiss="modal"
                                onClick={functionWhenClick}
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

export default MyCustomModal;
