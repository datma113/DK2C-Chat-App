import React from "react";
import { useSelector } from "react-redux";
import Welcome from "../welcome/Welcome";
import InboxList from "./InboxList";
import BoxChat from "./BoxChat";
import HeaderOfBoxChat from "./HeaderOfBoxChat";
import Introducing from "./Introducing";
import SendMessage from "./SendMessage";
const Home = () => {
    const authentication = useSelector((state) => state.authentication);
    const currentInboxId = useSelector((state) => state.currentInboxId);
    const currentRoomId = useSelector((state) => state.currentRoomId);
    const NOT_EXISTS_CURRENT_ID_BOX_CHAT = 0;
    return (
        <div>
            {!authentication.isLoggin && <Welcome />}

            {authentication.isLoggin && (
                <div className="home">
                    {/* col-3 */}
                    <InboxList />

                    {currentInboxId !== NOT_EXISTS_CURRENT_ID_BOX_CHAT ? (
                        <>
                            <div className="box-chat-container">
                                <HeaderOfBoxChat />
                                <BoxChat />
                                <SendMessage roomId={currentRoomId} />
                            </div>
                            <div className="right">NOTHING HERE</div>
                        </>
                    ) : (
                        <div className=" d-flex align-items-center flex-column mt-5">
                            <Introducing />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;
