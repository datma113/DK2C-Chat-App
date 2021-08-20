import { combineReducers } from "redux";
import userLogin from './userLogin'
import userRegister from './userRegister'

const reducer = combineReducers({
     userLogin,
     userRegister
})

export default reducer