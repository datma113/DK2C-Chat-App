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
<<<<<<< HEAD
import friendsList from './returnArray/friendsList'
import friendsRequest from './returnArray/friendsRequest'
import groups from './returnArray/groupsChat'
=======
import isScrollBottom from './returnBoolean/isScrollBottom'
import roomName from './returnObject/roomName'
import membersInRoom from './returnArray/membersInRoom'
>>>>>>> test-branch

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
<<<<<<< HEAD
     friendsList,
     friendsRequest,
     groups
=======
     isScrollBottom,
     roomName,
     membersInRoom
>>>>>>> test-branch
})

export default reducer