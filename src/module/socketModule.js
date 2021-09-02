import SockJS from "sockjs-client";
import Stomp from "stormjs";

const socketModule = (function () {
    let stompClient = null;

    function connect(userId, token = "") {
        let socket = new SockJS("/ws");
        stompClient = Stomp.over(socket);

        const user = {
            userId,
            access_token: token,
        };

        stompClient.connect(user);
    }

    function disconnect() {
         return stompClient !== null && stompClient.disconnect();
    }
})();
