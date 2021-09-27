import React from "react";
import CreateRoom from "../../modal/CreateRoom";
import ShowTheSameRoomOfUser from "../../modal/ShowTheSameRoomOfUser";

const OptionOfRoom = () => {
    return (
        <>
          <ShowTheSameRoomOfUser />
          <CreateRoom />
        </>
    );
};

export default OptionOfRoom;
