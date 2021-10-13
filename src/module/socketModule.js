import axios from "axios";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import {
    UPDATE_LAST_MESSAGE_IN_INBOX,
    UPDATE_MESSAGE_REALTIME,
    UPDATE_REACTION_REALTIME,
} from "../redux/constants/constants";
import { API_GET_INBOX_BY_ID } from "../redux/constants/api";

import newMessageSingleton from "./newMessageSingleton";
const socketModule = (function () {
    let stompClient = null;
    let newMessage = newMessageSingleton.getInsance();

    const isSelfSide = (myId, senderId) => {
        return myId === senderId ? true : false;
    };

    const getNotifyNewMessage = (message) => {
        if (message.newMessageRealTime >= 5) return "5+";
        message.increaseNewMesasgeByOne();
        return message.getNewMessageRealTime();
    };

    function connect(user, dispatch) {
        const WEB_SOCKET_URL = process.env.REACT_APP_WEB_SOCKET;
        let socket = new SockJS(WEB_SOCKET_URL);
        stompClient = Stomp.over(socket);

        const onConnected = () => {
            stompClient.subscribe("/users/queue/messages", function (resp) {
                const data = JSON.parse(resp.body);
                const MESSAGE = [{ ...data, reactions: [] }];
                const TYPE_MESSAGE_SYSTEM = "SYSTEM";

                dispatch({
                    type: UPDATE_MESSAGE_REALTIME,
                    realTimeMessage: MESSAGE,
                });

                axios.get(API_GET_INBOX_BY_ID + data.roomId).then((resp) => {
                    dispatch({
                        type: UPDATE_LAST_MESSAGE_IN_INBOX,
                        lastMessage: data,
                        inbox: resp.data,
                    });
                });

                if (data.type !== TYPE_MESSAGE_SYSTEM) {
                    const MY_ID = user.userId;
                    const SENDER_ID = data.sender.id;

                    let notify = getNotifyNewMessage(newMessage);

                    if (!isSelfSide(MY_ID, SENDER_ID)) {
                        document.title = `(${notify}) DKC APP`;
                    } else {
                        newMessage.resetNewMessageRealTime();
                        document.title = `DKC APP`;
                    }
                }
            });

            stompClient.subscribe("/users/queue/reaction", function (resp) {
                const data = JSON.parse(resp.body);

                dispatch({
                    type: UPDATE_REACTION_REALTIME,
                    messageWithRealTimeReactionSocket: data,
                });
            });
        };

        stompClient.connect(user, onConnected);
    }

    function disconnect() {
        return stompClient !== null && stompClient.disconnect();
    }

    function sendMessageToOneFriend(roomId, content, type) {
        const FRIEND = {
            content,
            roomId,
            type,
        };
        stompClient.send("/app/chat", {}, JSON.stringify(FRIEND));
    }

    function expressReaction(reaction) {
        stompClient.send("/app/reaction", {}, JSON.stringify(reaction));
    }

    return {
        connect: function (userId, token) {
            connect(userId, token);
        },
        disconnect: function () {
            disconnect();
        },
        sendMessageToOneFriend: function (roomId, content, type) {
            sendMessageToOneFriend(roomId, content, type);
        },
        expressReaction: function (reaction) {
            expressReaction(reaction);
        },
    };
})();
export default socketModule;
