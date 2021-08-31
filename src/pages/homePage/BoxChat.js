import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlwaysScrollToBottom from "../../components/AlwaysScrollToBottom";
import { getMessageInBoxChat } from "../../redux/action/actHome";

const BoxChat = () => {
    const dispatch = useDispatch();
    const boxChat = useSelector((state) => state.boxChat);
    const currentIdBoxChat = useSelector((state) => state.currentIdBoxChat);
    const authentication = useSelector((state) => state.authentication);
    const [loadingOlderMessage, setloadingOlderMessage] = useState(0);
    const [isInitialize, setisInitialize] = useState(true);

    const boxChatMap = boxChat.map((message, index) => {
        const SENDER_ID = message.sender.id;
        const MY_ID = authentication.user.id;
        const IS_SELF_SIDE = SENDER_ID === MY_ID ? true : false;

        const getSelfSideClass = () => {
            return IS_SELF_SIDE ? "" : "single-chat-box--other";
        };

        return (
            <div key={index} className={`single-chat-box mb-1 ${getSelfSideClass()}`}>
                {" "}
                <img
                    className="single-chat-box__img m-3"
                    src={message.sender.imageUrl}
                    alt=""
                />{" "}
                <div className="single-chat-box__message mt-3"> {message.content} </div>
            </div>
        );
    });

    useEffect(() => {
        dispatch(getMessageInBoxChat(currentIdBoxChat, 0));
        setisInitialize(true);
    }, [dispatch, currentIdBoxChat]);

    const loadOlderMessageInBoxChat = (e) => {
        const CURRENT_SCROLL_VALUE = e.target.scrollTop;
        const HEIGHT_OF_SUM_MESSAGE = e.target.scrollHeight;
        const SCROLL_VALUE_ZERO = 0;

        if (CURRENT_SCROLL_VALUE === SCROLL_VALUE_ZERO) {
            setisInitialize(false);
            const LOADING = loadingOlderMessage + 1;
            setloadingOlderMessage(LOADING);
            dispatch(getMessageInBoxChat(currentIdBoxChat, LOADING));
            e.target.scrollTop = HEIGHT_OF_SUM_MESSAGE - 100;
        }
    };

    return (
        <div className="single-chat-box-container" onScroll={(e) => loadOlderMessageInBoxChat(e)}>
            {boxChatMap}
            {isInitialize && <AlwaysScrollToBottom />}
        </div>
    );
};

export default BoxChat;
