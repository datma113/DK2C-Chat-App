import axios from "axios"

function LoginService() {}

const URL = 'http://localhost:8080/api/auth/signin'
LoginService.prototype = {
     login(user) {
          return axios.post(URL, user)
     }
}

export default new LoginService()