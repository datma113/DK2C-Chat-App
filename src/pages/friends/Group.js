import React from 'react'

const Group = (props) => {
    let groupChat = props.groupObj 
    return (
        <div className="col-4 " type="button">


            <div className="card text-center ">
                <div className="card-body row">
                    <div className="col-5 row">

                    </div>
                    <div className="friend__imgGroup col-2 ">
                        <img src={groupChat.room.imageUrl} alt="" />

                    </div>
                    <div className="col-5 row">

                    </div>

                    
                        <br />
                        <h3 className="card-title">{groupChat.room.name} || abc</h3>
                        <h5>Số lượng thành viên: {groupChat.room.numOfMembers}</h5>
                    
                    {/* <button type="button" class="btn btn-primary">Button</button> */}
                </div>
            </div>

        </div>
    )
}

export default Group
