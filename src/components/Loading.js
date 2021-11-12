import React from "react";

const Loading = () => {
    return (
        <div className="loading">
             <div className="loading__overlay"></div>
            <div
                className="spinner-border text-light loading__spinner"
                style={{ width: `8rem`, height: `8rem` }}
            ></div>
        </div>
    );
};

export default Loading;
