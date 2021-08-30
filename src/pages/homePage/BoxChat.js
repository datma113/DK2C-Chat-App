import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessageInBoxChat } from "../../redux/action/actHome";

const BoxChat = () => {
    const dispatch = useDispatch();
    const boxChat = useSelector(state => state.boxChat)
    const currentIdBoxChat = useSelector(state => state.currentIdBoxChat)

    console.log(boxChat)

    useEffect(() => {
        dispatch(getMessageInBoxChat(currentIdBoxChat));
    }, [dispatch, currentIdBoxChat]);

    return (
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores saepe deleniti eos,
            culpa nihil earum!
        </div>
    );
};

export default BoxChat;
