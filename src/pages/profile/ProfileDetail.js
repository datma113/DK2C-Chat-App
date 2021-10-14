import React from 'react'

const ProfileDetail = (props) => {
    let user = props.user
    
    return (
        <div className="container row ">
            <div className="profile__detail col-12">
                <h5>Số điện thoại đăng ký:</h5>
                <input value={user.phoneNumber} disabled />
                <br />
                <h5>Email:</h5>
                <input value={user.email} disabled />
                <h5>Số điện thoại đăng ký:</h5>
                <input value={user.phoneNumber} disabled />
            </div>
            

        </div>
    )
}

export default ProfileDetail
