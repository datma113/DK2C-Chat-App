import React, { useState } from "react";
import { useSelector } from "react-redux";
import Welcome from "../welcome/Welcome";
import BoxChat from "./BoxChat";
import HeaderOfBoxChat from "./HeaderOfBoxChat";
import Introducing from "./Introducing";
import SendMessage from "./SendMessage";
import HeaderOfInfoRoom from "../../components/HeaderOfInfoRoom";
import InfoOfRoom from "../../components/InfoOfRoom";
import OptionOfRoom from "./OptionOfRoom";
import Loading from "../../components/Loading";
import InboxSideBar from "./InboxSideBar";

const Home = () => {
    const authentication = useSelector((state) => state.authentication);
    const currentInboxId = useSelector((state) => state.currentInboxId);
    const currentRoomId = useSelector((state) => state.currentRoomId);
    const [isLoading, setisLoading] = useState(true);
    

    const renderWelcome = () => {
        setTimeout(() => {
            setisLoading(false);
        }, 1000);
        return <Welcome />;
    };

    return (
        <div>
            {!authentication.isLoggin && (
                <div>
                    {renderWelcome()}
                    {isLoading && <Loading />}
                </div>
            )}

            {authentication.isLoggin && (
                <div className="home">
                 <InboxSideBar />

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
                                    <OptionOfRoom roomId={currentRoomId} />
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className=" d-flex align-items-center flex-column bg-light">
                            <Introducing />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;
