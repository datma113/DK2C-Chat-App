import React from 'react'

const Group = () => {
    return (
        // <div className="friend row p-3 friend--active">
        <div className="col-4 " type="button">


            <div class="card text-center ">
                <div class="card-body row">
                    <div className="col-5 row">

                    </div>
                    <div className="friend__imgGroup col-2 ">
                        <img src="https://i.guim.co.uk/img/media/c9b0aad22638133aa06cd68347bed2390b555e63/0_477_2945_1767/master/2945.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=97bf92d90f51da7067d00f8156512925" alt="" />

                    </div>
                    <div className="col-5 row">

                    </div>

                    <p>
                        <br />
                        <h3 class="card-title">Group title</h3>
                        <h5>Số lượng thành viên</h5>
                    </p>
                    {/* <button type="button" class="btn btn-primary">Button</button> */}
                </div>
            </div>

        </div>
    )
}

export default Group
