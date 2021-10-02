import React from 'react'

const Group = (props) => {
    let groupChat = props.groupObj 
    return (
        // <div className="friend row p-3 friend--active">
        <div className="col-4 " type="button">


            <div class="card text-center ">
                <div class="card-body row">
                    <div className="col-5 row">

                    </div>
                    <div className="friend__imgGroup col-2 ">
                        <img src={groupChat.room.imageUrl} alt="" />

                    </div>
                    <div className="col-5 row">

                    </div>

                    <p>
                        <br />
                        <h3 class="card-title">{groupChat.room.name} || abc</h3>
                        <h5>Số lượng thành viên: {groupChat.room.numOfMembers}</h5>
                    </p>
                    {/* <button type="button" class="btn btn-primary">Button</button> */}
                </div>
            </div>

        </div>
    )
}

export default Group
