import SockJS from "sockjs-client";
import Stomp from 'stompjs'
import { STORE_REAL_TIME_RESPONSE, UPDATE_MESSAGE_REALTIME } from "../redux/constants/constants";
const socketModule = (function () {
    let stompClient = null;

    function connect(user, dispatch) {
        let socket = new SockJS("http://localhost:8080/ws");
        stompClient = Stomp.over(socket);


        const onConnected = () => {
            stompClient.subscribe(
                "/users/queue/messages",
                function (resp) {
                    const data = JSON.parse(resp.body)
                    const MESSAGE = [data]
                    dispatch({
                        type: UPDATE_MESSAGE_REALTIME,
                        realTimeMessage: MESSAGE
                    })

                    dispatch({
                        type: STORE_REAL_TIME_RESPONSE,
                        data
                    })
                }
              );
        }

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

    return {
        connect: function(userId, token) {
            connect(userId, token)
        },
        disconnect: function() {
            disconnect()
        },
        sendMessageToOneFriend: function(roomId, content, type) {
            sendMessageToOneFriend(roomId, content, type);
        }

    }
})();
export default socketModule
