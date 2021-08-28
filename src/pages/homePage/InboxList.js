import axios from 'axios'
import React from 'react'

const InboxList = () => {

     const getInbox = () => {
          axios.get('http://localhost:8080/api/inboxs')
          .then((resp) => {
               console.log(resp.data)
          })
     }

     return (
          <div>
               <div className="btn btn-dark btn-welcome" onClick={getInbox}>get inbox</div>
          </div>
     )
}

export default InboxList
