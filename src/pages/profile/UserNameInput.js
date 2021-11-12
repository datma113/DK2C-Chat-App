import React, { useState } from "react";

const UserNameInput = ({ user, id, functionWhenClick }) => {
    const [name, setName] = useState("");
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
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button
                        className="btn btn-danger col-4"
                        onClick={() => functionWhenClick(name)}
                    >
                        Lưu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserNameInput;
