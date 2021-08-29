import { combineReducers } from "redux";
import userLogin from './userLogin'
import userRegister from './userRegister'
import message from './message'
import authentication from './authentication'
import inboxs from './inboxs'
const reducer = combineReducers({
     userLogin,
     userRegister,
     message,
     authentication,
     inboxs
})

export default reducer