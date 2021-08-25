import axios from 'axios'
import React from 'react'

const home = () => {
     const getUserInfo = () => {
          axios.get('http://localhost:8080/api/conversations')
          .then(resp => {
               console.log(resp.data)
          })
     }
     return (
          <div>
               <div className="btn btn-danger btn-welcome" onClick={() => getUserInfo()}>onclick</div>
          </div>
     )
}

export default home
