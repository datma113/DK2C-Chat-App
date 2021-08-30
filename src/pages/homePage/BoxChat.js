import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessageInBoxChat } from "../../redux/action/actHome";

const BoxChat = () => {
    const dispatch = useDispatch();
    const boxChat = useSelector((state) => state.boxChat);
    const currentIdBoxChat = useSelector((state) => state.currentIdBoxChat);
    const authentication = useSelector((state) => state.authentication);
    
    const boxChatMap = boxChat.map((message, index) => {
        const SENDER_ID = message.sender.id;
        const MY_ID = authentication.user.id;
        const IS_SELF_SIDE = SENDER_ID === MY_ID ? true : false;

        const getSelfSideClass = () => {
             return IS_SELF_SIDE ? "" : 'single-chat-box--other'
        }

        return (
            <div key={index} className={`single-chat-box mb-1 ${getSelfSideClass()}`}>
                {" "}
                <img className="single-chat-box__img m-3" src={message.sender.imageUrl} alt="" />{" "}
                <div className="single-chat-box__message mt-3" > {message.content} </div>
            </div>
        );
    });

    useEffect(() => {
        dispatch(getMessageInBoxChat(currentIdBoxChat));
    }, [dispatch, currentIdBoxChat]);

    return <div>{boxChatMap}</div>;
};

export default BoxChat;
