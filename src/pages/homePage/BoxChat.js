import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlwaysScrollToBottom from "../../components/AlwaysScrollToBottom";
import MessageChat from "../../components/MessageChat";
import { getMessageInBoxChat } from "../../redux/action/actHome";

const BoxChat = () => {
    const dispatch = useDispatch();
    const boxChat = useSelector((state) => state.boxChat);
    const currentIdBoxChat = useSelector((state) => state.currentIdBoxChat);
    const [loadingOlderMessage, setloadingOlderMessage] = useState(0);
    const [isInitialize, setisInitialize] = useState(true);
    const [lenthOfTheFirstLoadingMessage, setlenthOfTheFirstLoadingMessage] = useState(0);

    useEffect(() => {
        dispatch(getMessageInBoxChat(currentIdBoxChat, 0));
        setisInitialize(true);
        //when change other inbox, it will reset loading value to 0
        setloadingOlderMessage(0)
    }, [dispatch, currentIdBoxChat]);

    const loadOlderMessageInBoxChat = (e) => {
        const CURRENT_SCROLL_VALUE = e.target.scrollTop;
        const SUM_OF_HEIGHT_MESSAGE = e.target.scrollHeight;
        const SCROLL_TO_VALUE_ZERO = 0;
      
        if (isInitialize) setlenthOfTheFirstLoadingMessage(SUM_OF_HEIGHT_MESSAGE);

        if (CURRENT_SCROLL_VALUE === SCROLL_TO_VALUE_ZERO) {
            setisInitialize(false);
            const LOADING = loadingOlderMessage + 1;
            setloadingOlderMessage(LOADING);
            dispatch(getMessageInBoxChat(currentIdBoxChat, LOADING));
            e.target.scrollTop =
                SUM_OF_HEIGHT_MESSAGE - lenthOfTheFirstLoadingMessage * (LOADING - 1);
        }
    };

    return (
        <div className="single-chat-box-container" onScroll={(e) => loadOlderMessageInBoxChat(e)}>
            <MessageChat boxChat={boxChat} />
            {isInitialize && <AlwaysScrollToBottom />}
        </div>
    );
};

export default BoxChat;
