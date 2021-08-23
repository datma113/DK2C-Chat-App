import React from 'react'

const ErrorHandle = ({message}) => {
     
     const hasError = () => {
          return message ? "" : "d-none"
     }
     return (
          
          <div className={`alert alert-danger err-message text-center ${hasError()}`} >
               <i className="fas fa-exclamation-triangle"></i>
               {message}
          </div>
     )
}

export default ErrorHandle
