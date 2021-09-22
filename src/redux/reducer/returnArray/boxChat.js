import {
    INITIALIZE_MESSAGE_IN_BOX_CHAT,
    STORE_MESSAGE_IN_BOX_CHAT,
    UPDATE_MESSAGE_REALTIME,
} from "../../constants/constants";

const initial = [];

const reducer = (state = initial, action) => {
    let { type, message, realTimeMessage, messageWithRealTimeReactionSocket } = action;

    switch (type) {
        case INITIALIZE_MESSAGE_IN_BOX_CHAT:
            return message;

        case STORE_MESSAGE_IN_BOX_CHAT:
            let olderMessage = [...message, ...state];
            return olderMessage;

        case UPDATE_MESSAGE_REALTIME:
            let realTimeMessageState = [...state, ...realTimeMessage];
            return realTimeMessageState;

        case "UPDATE_REACTION_REALTIME":
            let messageWithRealTimeReaction = [...state];

            messageWithRealTimeReaction.forEach((message, index) => {
                const CURRENT_MESSAGE_ID = message.id;
                const SOCKET_REACTION_MESSAGE_ID = messageWithRealTimeReactionSocket.messageId;

                if (CURRENT_MESSAGE_ID === SOCKET_REACTION_MESSAGE_ID) {
                    const REACTION = {
                        reactByUserId: messageWithRealTimeReactionSocket.reactByUser.id,
                        type: messageWithRealTimeReactionSocket.type,
                    };
                    messageWithRealTimeReaction[index].reactions.push(REACTION);
                }
            });
            return messageWithRealTimeReaction;
        default:
            break;
    }
    return state;
};

export default reducer;
