import SockJS from "sockjs-client";
import Stomp from 'stompjs'
import { UPDATE_MESSAGE_REALTIME } from "../redux/constants/constants";
const socketModule = (function () {
    let stompClient = null;

    function connect(user, dispatch) {
        let socket = new SockJS("http://localhost:8080/ws");
        stompClient = Stomp.over(socket);


        const onConnected = () => {
            stompClient.subscribe(
                "/users/queue/messages",
                function (resp) {
                    const MESSAGE = [JSON.parse( resp.body)]
                    dispatch({
                        type: UPDATE_MESSAGE_REALTIME,
                        realTimeMessage: MESSAGE
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
