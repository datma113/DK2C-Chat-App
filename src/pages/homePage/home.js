import React from "react";
import { useSelector } from "react-redux";
import Welcome from "../welcome/Welcome";
import InboxList from "./InboxList";
import BoxChat from "./BoxChat";
import HeaderOfBoxChat from "./HeaderOfBoxChat";
import Introducing from "./Introducing";
import SendMessage from "./SendMessage";
import HeaderOfInfoRoom from "../../components/HeaderOfInfoRoom";
import InfoOfRoom from "../../components/InfoOfRoom";
import OptionOfRoom from "./OptionOfRoom";
const Home = () => {
    const authentication = useSelector((state) => state.authentication);
    const currentInboxId = useSelector((state) => state.currentInboxId);
    const currentRoomId = useSelector((state) => state.currentRoomId);
    return (
        <div>
            {!authentication.isLoggin && <Welcome />}

            {authentication.isLoggin && (
                <div className="home">
                    {/* col-3 */}
                    <InboxList />

                    {currentInboxId ? (
                        <>
                            <div className="box-chat-container">
                                <HeaderOfBoxChat />
                                <BoxChat />
                                <SendMessage roomId={currentRoomId} />
                            </div>
                            <div className="info-room-right">
                                <HeaderOfInfoRoom />
                                <div className="info-room-right__scroll">
                                    <InfoOfRoom />
                                    <OptionOfRoom roomId={currentRoomId}/>
                                </div>
                            </div>
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
