import React from "react";

const TagOfOptionRoom = ({ id, classIcon, text, colorIcon, functionWhenClick }) => {
    return (
        <>
            <div
                type="button"
                data-mdb-toggle="modal"
                data-mdb-target={`#${id}`}
                className="row option-room"
                onClick={functionWhenClick}
            >
                <div className={`col-2 center ${colorIcon}`}>
                    <i className={classIcon}></i>
                </div>
                <div className="col-10"> {text} </div>
            </div>
        </>
    );
};

export default TagOfOptionRoom;
