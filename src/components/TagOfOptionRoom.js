import React from "react";

const TagOfOptionRoom = ({ id, classIcon, text }) => {
    return (
        <>
            <div
                type="button"
                data-mdb-toggle="modal"
                data-mdb-target={`#${id}`}
                className="row option-room"
            >
                <div className="col-3 center">
                    <i className={classIcon}></i>
                </div>
                <div className="col-9"> {text} </div>
            </div>
        </>
    );
};

export default TagOfOptionRoom;
