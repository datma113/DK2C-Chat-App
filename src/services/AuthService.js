import axios from "axios"

const AUTH_API = 'http://localhost:8080/api/auth/'

function AutheService() {}

AutheService.prototype = {
     login(user) {
          return axios.post(AUTH_API + 'signin', user)
          .then(resp => {
               console.log(resp.data)
          })
     }
}
export default new AutheService()