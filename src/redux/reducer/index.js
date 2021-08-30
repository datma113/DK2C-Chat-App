import { combineReducers } from "redux";
import userLogin from './userLogin'
import userRegister from './userRegister'
import message from './message'
import authentication from './authentication'
import inboxs from './inboxs'
import boxChat from './boxChat'
import currentIdBoxChat from './returnNumber/currentIdBoxChat'
const reducer = combineReducers({
     userLogin,
     userRegister,
     message,
     authentication,
     inboxs,
     boxChat,
     currentIdBoxChat
})

export default reducer