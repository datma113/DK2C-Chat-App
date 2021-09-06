import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTokenWhenRefreshPage } from "../../redux/action/actLogin";
import Welcome from "../welcome/Welcome";
import InboxList from "./InboxList";
import BoxChat from "./BoxChat";
import HeaderOfBoxChat from "./HeaderOfBoxChat";
import { useState } from "react";
import Loading from "../../components/Loading";
import Introducing from "./Introducing";
import SendMessage from "./SendMessage";
const Home = () => {
    const authentication = useSelector((state) => state.authentication);
    const currentInboxId = useSelector((state) => state.currentInboxId);
    const currentRoomId = useSelector(state => state.currentRoomId)
    const [isLoading, setisLoading] = useState(true);
    const dispatch = useDispatch();
    const NOT_EXISTS_CURRENT_ID_BOX_CHAT = 0;

    useEffect(() => {
        dispatch(getTokenWhenRefreshPage())
            .then(() => {
                setisLoading(false);
            })
            .then(() => {});
    }, [dispatch]);

    return (
        <div>
            {isLoading && <Loading />}
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
