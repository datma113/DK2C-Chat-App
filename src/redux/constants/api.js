// const API = 'http://localhost:8080/api/'

const API = process.env.REACT_APP_BASE_URL

/**authentication */
const AUTH = 'auth/'
const SIGN_UP = 'signup'
export const API_SIGN_IN = API + AUTH + 'signin'
export const API_SIGN_OUT = API + AUTH + 'signout'
export const API_GET_USER_WHEN_EXISTS_REFRESH_TOKEN = API + 'user/me'

export const API_GET_REFRESH_TOKEN = API + AUTH + 'refreshtoken'
/**Register */
export const API_SIGN_UP_IMFORMATION = API + AUTH + SIGN_UP + 'save_information'
export const API_SIGN_UP_CHECK_MAIL = API + AUTH + SIGN_UP + 'send_vetification_code'
export const API_SIGN_UP_VERIFY = API + AUTH + SIGN_UP + 'verify'

/**Chat */
export const API_GET_INBOXS = API + 'inboxs'
export const API_GET_MESSAGE_IN_CHAT_BOX = API + 'messages/inbox/'
export const API_EXPRESS_REACTION_TO_MESSAGE = API + 'messages/react/'