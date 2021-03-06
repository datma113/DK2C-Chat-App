const API = process.env.REACT_APP_BASE_URL;

const API_AUTH = API + "auth/";
const API_SIGN_UP = API_AUTH + "signup/";
const API_USER = API + "user/";
const API_ME = API_USER + "me/";

export const API_BLOCK = API + "blocks"
export const API_MESSAGES = API + 'messages/'
export const API_FRIENDS = API + "friends"
export const API_INBOXS = API + "inboxs";
export const API_ROOM = API + "rooms/";
export const API_FRIENDS_REQUEST = API + "friend-request/";

/**authentication */
export const API_SIGN_IN = API_AUTH + "signin";
export const API_SIGN_OUT = API_AUTH + "signout";
export const API_GET_USER_WHEN_EXISTS_REFRESH_TOKEN = API + "user/me";
export const API_GET_REFRESH_TOKEN = API_AUTH + "refreshtoken";
/**Register */

export const API_VALID_EMAIL = API_SIGN_UP + "email/valid";
export const API_VALID_PHONE = API_SIGN_UP + "phone/valid";
export const API_SIGN_IN_WITH_PHONE = API_AUTH + "signup/phone";

export const API_SIGN_UP_CHECK_MAIL = API_SIGN_UP + "email";
export const API_SIGN_UP_VERIFY = API_SIGN_UP + "email/verify";
export const API_SIGN_UP_RESEND = API_SIGN_UP + "email/reSendVerificationCode";

/**Profile */
export const API_USER_INFO = API_ME;
export const API_CHANGE_USER_IMAGE = API_ME + "changeImage"
export const API_CHANGE_PASSWORD = API_ME + "changePassword";

/** user */
export const API_GET_USER_PROFILE = API_USER + "viewProfile/";
export const API_SEARCH_USERS_BY_PHONE = API_USER + "searchPhone?textToSearch=";
export const API_REPORT_USER = API_USER + "report";

/**inbox */
export const API_GET_INBOX_BY_ID = API_INBOXS + "/ofRoomId/";
export const API_GET_INBOX_BY_FRIEND_ID = API_INBOXS + "/with/";

/**Chat */
export const API_GET_MESSAGE_IN_CHAT_BOX = API_MESSAGES + "inbox/";
export const API_MEMBERS_EXPRESS_REATIONS = API_MESSAGES + "react/";
export const API_ALL_MEDIA = API_MESSAGES + "media";

export const API_GET_FILE_URL_WHEN_SENDED = API + "file/";

/**info room */
export const API_CREATE_NEW_ROOM = API_ROOM;
export const API_EDIT_ROOM_NAME = API_ROOM + "rename/";
export const API_GET_MEMBERS_IN_ROOM = API_ROOM + "members/";
export const API_ADD_NEW_MEMBERS = API_ROOM + "members/";
export const API_OUT_ROOM = API_ROOM + "leave/";
export const API_CHANGE_IMAGE_GROUP = API_ROOM + 'changeImage/'
export const API_SET_MEMBER_BECOME_ADMIN = API_ROOM + 'admin'
