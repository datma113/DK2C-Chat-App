import React from "react";

const ReadBy = ({ lastMessageReadBy }) => {
    const LENGTH_OF_LAST_MESSAGE_READ_BY = lastMessageReadBy.length;

    const lastMessageReadByMap = lastMessageReadBy.slice(0, 4).map((user, index) => {
        return (
            <img
                className={`read-by__img read-by__img--${index}`}
                key={index}
                src={user.readByUser.imageUrl}
                alt=""
            />
        );
    });
    return (
        <div className="read-by">
            {lastMessageReadByMap}
            {LENGTH_OF_LAST_MESSAGE_READ_BY >= 4 && (
                <div className="read-by__overlay center"> + </div>
            )}
        </div>
    );
};

export default ReadBy;
