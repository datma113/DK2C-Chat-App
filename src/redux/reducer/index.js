import { combineReducers } from "redux";
import userLogin from './returnObject/userLogin'
import userRegister from './returnObject/userRegister'
import message from './returnObject/message'
import authentication from './returnObject/authentication'
import inboxs from './returnArray/inboxs'
import boxChat from './returnArray/boxChat'
import currentInboxId from './returnNumber/currentInboxId'
import currentInbox from './returnObject/currentInbox'
import currentRoomId from './returnNumber/currentRoomId'
import realTimeResponse from './returnObject/realTimeResponse'
import isScrollBottom from './returnBoolean/isScrollBottom'
import roomName from './returnObject/roomName'

const reducer = combineReducers({
     userLogin,
     userRegister,
     message,
     authentication,
     inboxs,
     boxChat,
     currentInboxId,
     currentInbox,
     currentRoomId,
     realTimeResponse,
     isScrollBottom,
     roomName
})

export default reducer