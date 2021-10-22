import React from "react";

const UserNameInput = ({user, id}) => {

    return (
        <div className="container row">
            <div className="profile__detail col-12 ">
                <div>
                    {" "}
                    <input
                        className="col-8"
                        type="text"
                        id={id}
                        placeholder={user.displayName}
                    />
                    <button className="btn btn-danger col-4">Lưu</button>
                </div>
            </div>
        </div>
    );
};

export default UserNameInput;
