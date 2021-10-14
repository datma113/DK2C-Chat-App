import React from 'react'

const UserNameLabel = (props) => {
    let user = props.user
    let onNameChange = props.onNameChange
    let handleButtonClick = (indexOfNameElement) =>{
        if(onNameChange) onNameChange(indexOfNameElement)
    }
    return (
        <div>
             <h3><strong>{user.displayName} <i className="fas fa-user-edit" type="button" onClick={()=>handleButtonClick(1)}></i></strong></h3>
        </div>
    )
}

export default UserNameLabel
