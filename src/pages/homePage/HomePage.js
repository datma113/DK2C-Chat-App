import React, { useCallback, useEffect, useState } from "react";
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
import MediaStore from "../../components/MediaStore";

const Home = () => {
    const authentication = useSelector((state) => state.authentication);
    const currentInboxId = useSelector((state) => state.currentInboxId);
    const currentRoomId = useSelector((state) => state.currentRoomId);
    const currentInbox = useSelector((state) => state.currentInbox);
    const [isLoading, setisLoading] = useState(true);
    const [classShowBoxchat, setclassShowBoxchat] = useState("");
    const [classShowInboxs, setclassShowInboxs] = useState("");

    const showOrHideBoxchatWhenResponsive = useCallback(() => {
        const MEDIUM_SIZE = 768;
        const CURRENT_WIDTH_SIZE = window.innerWidth;

        if (CURRENT_WIDTH_SIZE <= MEDIUM_SIZE && !currentInboxId) {
            setclassShowBoxchat("hide-an-element");
        } else setclassShowBoxchat("");
    }, [currentInboxId]);

    const showOrHideInboxs = useCallback(() => {
        const MEDIUM_SIZE = 768;
        const CURRENT_WIDTH_SIZE = window.innerWidth;
        if (CURRENT_WIDTH_SIZE <= MEDIUM_SIZE && currentInboxId) {
            setclassShowInboxs("hide-an-element");
        } else setclassShowInboxs("");
    }, [currentInboxId]);

    const renderWelcome = () => {
        setTimeout(() => {
            setisLoading(false);
        }, 1000);
        return <Welcome />;
    };

    window.onresize = () => {
        showOrHideBoxchatWhenResponsive();
        showOrHideInboxs();
    };

    useEffect(() => {
        showOrHideBoxchatWhenResponsive();
        showOrHideInboxs();
    }, [showOrHideInboxs, showOrHideBoxchatWhenResponsive]);

    return (
        <div>
            {!authentication.isLoggin && (
                <div>
                    {renderWelcome()}
                    {isLoading && <Loading />}
                </div>
            )}

            {authentication.isLoggin && (
                <div className={`home`}>
                    <InboxSideBar
                        responsiveClass={classShowInboxs}
                        currentInboxId={currentInboxId}
                        authentication={authentication}
                    />

                    {currentInboxId ? (
                        <>
                            <div className={`box-chat-container ${classShowBoxchat}`}>
                                <HeaderOfBoxChat />
                                <BoxChat
                                    currentInboxId={currentInboxId}
                                    authentication={authentication}
                                    currentRoomId={currentRoomId}
                                />
                                <SendMessage roomId={currentRoomId} />
                            </div>
                            <div className="info-room-right">
                                <HeaderOfInfoRoom />
                                <div className="info-room-right__scroll">
                                    <InfoOfRoom currentInbox={currentInbox} />
                                    <OptionOfRoom roomId={currentRoomId} />
                                    <MediaStore  roomId={currentRoomId}/>
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
