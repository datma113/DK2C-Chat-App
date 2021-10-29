import React from "react";

const AddFriend = ({handleOnChange}) => {
    return (
        <div className="center">
            <input
                type="text"
                className="form-control text-medium text-center w-75"
                placeholder="Tìm số điện thoại"
                onChange={handleOnChange}
            />
        </div>
    );
};

export default AddFriend;
