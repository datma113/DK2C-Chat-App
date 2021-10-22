import React, { useState } from 'react'
import DateSelected from '../../components/DateSelected'


const ProfileDetail = (props) => {
    let user = props.user



    return (
        <div className="container row ">
            <div className="profile__detail col-12">
                <div className="mb-2"> <h4>Số điện thoại đăng ký:</h4>
                    <input value={user.phoneNumber || 'đang tải'} disabled className="text-small"  /></div>
                <div className="mb-2">
                    <h4>Email:</h4>
                    <input value={user.email || 'đang tải'} disabled className="text-small"  />
                </div>
                <div className="mb-2">
                    <h4>Số điện thoại đăng ký:</h4>
                    <input defaultValue={user.phoneNumber} className="text-small" />
                </div>




                <DateSelected />
            </div>



        </div>
    )
}

export default ProfileDetail
