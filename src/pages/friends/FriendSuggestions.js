import React from 'react'

const FriendSuggestions = () => {
    let friendRequestArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const friendRequestArrMap = friendRequestArr.map((fr, index) => {

        return <div > <div className="p-3  card col-3">

            <div className="card-body row">
                <div className="col-12">
                    <div className="friend__img">
                        <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/scoop_on_cat_poop_other/1800x1200_scoop_on_cat_poop_other.jpg?resize=600px:*" alt="" />
                    </div>
                </div>
                <div className="col-9">
                    <h5 className="card-title ">Full name of Friend</h5>
                    <p>
                        <h6>Some messgae from friend request</h6>
                    </p>
                </div>

                <div className=" col-2 ">
                    <button type="button" className="btn btn-light  ">Từ chối</button> &nbsp;
                    <button type="button" className="btnFriendAccept btn btn-primary ">Xác nhận</button>

                </div>
            </div>
        </div>
        {/* <br></br> */}
        </div>
    })
    return (
        <>
           

            <div className="row">
                {friendRequestArrMap}
            </div>
           

        </>
    )
}

export default FriendSuggestions

