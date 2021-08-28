import { combineReducers } from "redux";
import userLogin from './userLogin'
import userRegister from './userRegister'
import message from './message'
import authentication from './authentication'

const reducer = combineReducers({
     userLogin,
     userRegister,
     message,
     authentication
})

export default reducer