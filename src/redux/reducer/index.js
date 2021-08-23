import { combineReducers } from "redux";
import userLogin from './userLogin'
import userRegister from './userRegister'
import message from './message'

const reducer = combineReducers({
     userLogin,
     userRegister,
     message
})

export default reducer