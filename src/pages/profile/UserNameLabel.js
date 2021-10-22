import React from "react";

const UserNameLabel = (props) => {
    let user = props.user;
    let onNameChange = props.onNameChange;
    
  
    return (
        <div>
            <h3>
                <strong>
                    {user.displayName}{" "}
                    <i
                        className="fas fa-user-edit"
                        type="button"
                        onClick={onNameChange}
                    ></i>
                </strong>
            </h3>
        </div>
    );
};

export default UserNameLabel;
