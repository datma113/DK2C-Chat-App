const API = process.env.REACT_APP_BASE_URL

/**authentication */
const AUTH = 'auth/'
const SIGN_UP = 'signup/'
const ROOM = 'rooms/'

export const API_SIGN_IN = API + AUTH + 'signin'
export const API_SIGN_OUT = API + AUTH + 'signout'
export const API_GET_USER_WHEN_EXISTS_REFRESH_TOKEN = API + 'user/me'

export const API_GET_REFRESH_TOKEN = API + AUTH + 'refreshtoken'
/**Register */
export const API_SIGN_UP_IMFORMATION = API + AUTH + SIGN_UP + 'save_information'
export const API_SIGN_UP_CHECK_MAIL = API + AUTH + SIGN_UP + 'send_verification_code'
export const API_SIGN_UP_VERIFY = API + AUTH + SIGN_UP + 'verify'
/**Friend  */

export const API_GET_FRIENDS_LIST = API + 'friends'
export const API_GET_FRIENDS_REQUEST = API + 'friend-request/'
/**Profile */
export const API_GET_USER_INFO = API + 'user/me'

/**inbox */
export const API_INBOXS = API + 'inboxs/'
export const API_GET_INBOX_BY_ID = API + 'inboxs/ofRoomId/' 
export const API_GET_INBOX_BY_FRIEND_ID = API + 'inboxs/with/'

/**Chat */
export const API_GET_MESSAGE_IN_CHAT_BOX = API + 'messages/inbox/'
export const API_GET_FILE_URL_WHEN_SENDED = API + 'file/'

/**info room */
export const API_CREATE_NEW_ROOM = API + ROOM
export const API_EDIT_ROOM_NAME = API + ROOM + 'rename/'
export const API_GET_MEMBERS_IN_ROOM = API + ROOM + 'members/'
export const  API_ADD_NEW_MEMBERS = API + ROOM + 'members/'
export const API_OUT_ROOM = API + ROOM + 'leave/'