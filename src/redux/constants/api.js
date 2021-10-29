const API = process.env.REACT_APP_BASE_URL;

/**authentication */
const API_AUTH = API + "auth/";
const API_SIGN_UP = API_AUTH + "signup/";
const API_ROOM = API + "rooms/";
const API_USER = API + "user/";
const API_ME = API_USER + "me/";
export const API_FRIENDS = API + "friends"
export const API_INBOXS = API + "inboxs/";


export const API_SIGN_IN = API_AUTH + "signin";
export const API_SIGN_OUT = API_AUTH + "signout";
export const API_GET_USER_WHEN_EXISTS_REFRESH_TOKEN = API + "user/me";

export const API_GET_REFRESH_TOKEN = API_AUTH + "refreshtoken";
/**Register */
export const API_SIGN_UP_IMFORMATION = API_SIGN_UP + "save_information";
export const API_SIGN_UP_CHECK_MAIL = API_SIGN_UP + "send_verification_code";
export const API_SIGN_UP_VERIFY = API_SIGN_UP + "verify";
/**Friend  */


export const API_GET_FRIENDS_REQUEST = API + "friend-request/";
/**Profile */
export const API_GET_USER_INFO = API_ME;
export const API_CHANGE_USER_IMAGE = API_ME + "changeImage"
export const API_CHANGE_PASSWORD = API_ME + "changePassword";
export const API_GET_USER_PROFILE = API_USER + "viewProfile/";
export const API_SEARCH_USERS_BY_PHONE = API_USER + "searchPhone?textToSearch=";
/**inbox */
export const API_GET_INBOX_BY_ID = API_INBOXS + "ofRoomId/";
export const API_GET_INBOX_BY_FRIEND_ID = API_INBOXS + "with/";

/**Chat */
export const API_GET_MESSAGE_IN_CHAT_BOX = API + "messages/inbox/";
export const API_GET_FILE_URL_WHEN_SENDED = API + "file/";

/**info room */
export const API_CREATE_NEW_ROOM = API_ROOM;
export const API_EDIT_ROOM_NAME = API_ROOM + "rename/";
export const API_GET_MEMBERS_IN_ROOM = API_ROOM + "members/";
export const API_ADD_NEW_MEMBERS = API_ROOM + "members/";
export const API_OUT_ROOM = API_ROOM + "leave/";
