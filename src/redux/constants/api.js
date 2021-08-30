const API = 'http://localhost:8080/api/'

/**authentication */
const AUTH = 'auth/'
const SIGN_UP = 'signup'
export const API_SIGN_IN = API + AUTH + 'signin'
export const API_GET_REFRESH_TOKEN = API + AUTH + 'refreshtoken'
export const API_SIGN_UP_IMFORMATION = API + SIGN_UP + 'save_information'
export const API_SIGN_UP_CHECK_MAIL = API + SIGN_UP + 'send_vetification_code'
export const API_SIGN_UP_VERIFY = API + SIGN_UP + 'verify'

/** */
export const API_GET_USER_WHEN_EXISTS_REFRESH_TOKEN = API + 'user/me'
export const API_GET_INBOXS = API + 'inboxs'
export const API_GET_MESSAGE_IN_CHAT_BOX = API + 'messages/inbox/'