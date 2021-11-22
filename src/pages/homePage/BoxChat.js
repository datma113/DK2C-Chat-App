import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageChat from "../../components/MessageChat";
import { getMessageInBoxChat } from "../../redux/action/actHome";
import { SCROLL_BOTTOM_WHEN_SEND_MESSAGE } from "../../redux/constants/constants";
const BoxChat = ({ currentRoomId, currentInboxId, authentication }) => {
    const dispatch = useDispatch();
    const boxChat = useSelector((state) => state.boxChat);
    const isScrollBottom = useSelector((state) => state.isScrollBottom);
    const currentInbox = useSelector((state) => state.currentInbox);

    const [loadingOlderMessage, setloadingOlderMessage] = useState(0);
    const [isInitialize, setisInitialize] = useState(true);
    const [lenthOfTheFirstLoadingMessage, setlenthOfTheFirstLoadingMessage] = useState(0);

    useEffect(() => {
        const boxchatElement = document.getElementById("chatBoxContainer");

        dispatch(getMessageInBoxChat(currentInboxId, 0)).then(() => {
            boxchatElement.scrollTop = boxchatElement.scrollHeight;
        });
        //when change other inbox, it will reset loading value to 0
        setloadingOlderMessage(0);
        setisInitialize(true);

        dispatch({
            type: SCROLL_BOTTOM_WHEN_SEND_MESSAGE,
            status: false,
        });

        boxchatElement.scrollTop = boxchatElement.scrollHeight;
    }, [dispatch, currentInboxId, isScrollBottom]);

    const loadOlderMessageInBoxChat = (e) => {
        const CURRENT_SCROLL_VALUE = e.target.scrollTop;
        const SUM_OF_HEIGHT_MESSAGE = e.target.scrollHeight;
        const SCROLL_TO_VALUE_ZERO = 0;

        if (isInitialize) setlenthOfTheFirstLoadingMessage(SUM_OF_HEIGHT_MESSAGE);

        if (CURRENT_SCROLL_VALUE === SCROLL_TO_VALUE_ZERO) {
            setisInitialize(false);
            const LOADING = loadingOlderMessage + 1;
            setloadingOlderMessage(LOADING);
            dispatch(getMessageInBoxChat(currentInboxId, LOADING));
            e.target.scrollTop =
                SUM_OF_HEIGHT_MESSAGE - lenthOfTheFirstLoadingMessage * (LOADING - 1);
        }
    };

    const setFalseInitialWhenMouseEnter = () => {
        setisInitialize(false);
    };

    const stylesImageBackground = {
        backgroundImage: `url(${currentInbox.imgUrl})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: "cover",
    };
    return (
        <div
            className="single-chat-box-container"
            id="chatBoxContainer"
            style={stylesImageBackground}
            onScroll={(e) => loadOlderMessageInBoxChat(e)}
            onMouseEnter={() => setFalseInitialWhenMouseEnter()}
        >
            <MessageChat
                boxChat={boxChat}
                authentication={authentication}
                currentRoomId={currentRoomId}
            />
        </div>
    );
};

export default BoxChat;
