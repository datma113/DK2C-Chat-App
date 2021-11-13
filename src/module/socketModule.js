import axios from "axios";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import {
    createAction,
    DELETE_AN_MESSAGE,
    UPDATE_BUTTON_WHEN_SENT_REQUEST,
    UPDATE_FRIENDS_REQUEST_AFTER_SENT_REQUEST,
    UPDATE_LAST_MESSAGE_IN_INBOX,
    UPDATE_MESSAGE_REALTIME,
    UPDATE_REACTION_REALTIME,
    UPDATE_USERS_AFTER_SENT_REQUEST,
} from "../redux/constants/constants";
import { API_GET_INBOX_BY_ID } from "../redux/constants/api";
import newMessageSingleton from "./newMessageSingleton";
import soundEff from "../assets/image/mixkit-coin-win-notification-1992.wav";

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
        const MY_ID = user.userId;
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
                    const SENDER_ID = data.sender.id;

                    let notify = getNotifyNewMessage(newMessage);

                    if (!isSelfSide(MY_ID, SENDER_ID)) {
                        const audio = new Audio(soundEff);
                        audio.volume = 0.2;
                        audio.play();

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

            stompClient.subscribe("/users/queue/messages/delete", function (resp) {
                const data = JSON.parse(resp.body);

                dispatch({
                    type: DELETE_AN_MESSAGE,
                    message: data,
                });
            });

            stompClient.subscribe("/users/queue/friendRequest/received", function (resp) {
                const data = JSON.parse(resp.body);
                dispatch(createAction(UPDATE_USERS_AFTER_SENT_REQUEST, data));
                dispatch(createAction(UPDATE_FRIENDS_REQUEST_AFTER_SENT_REQUEST, data));
                dispatch(createAction(UPDATE_BUTTON_WHEN_SENT_REQUEST, data));
            });

            stompClient.subscribe("/users/queue/friendRequest/accept", function (resp) {
                const data = JSON.parse(resp.body);

                console.log(data);
            });

            stompClient.subscribe("/users/queue/friendRequest/recall", function (resp) {
                const data = JSON.parse(resp.body);

                console.log(data);
            });

            stompClient.subscribe("/users/queue/friendRequest/delete", function (resp) {
                const data = JSON.parse(resp.body);

                console.log(data);
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
