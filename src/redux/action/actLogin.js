import {STORE_PHONE_AND_PASSWORD_WHEN_LOGIN} from '../constants/constants'

export const storePhoneAndPasswordWhenLogin = (key, value) => {
     //key and value was created to save a dynamic object
     return {
          type: STORE_PHONE_AND_PASSWORD_WHEN_LOGIN,
          key,
          value
     }
}
