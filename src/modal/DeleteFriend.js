import React from 'react'

const DeleteFriend = ({id, deleteFriend, onMouseLeave}) => {
     return (
          <>
          <div
              type="button"
              data-mdb-toggle="modal"
              data-mdb-target={`#deleteFriend${id}`}
              className={`option-friend-inbox__options__element text-small text-danger`}
          >
              Hủy kết bạn
          </div>

          <div
              className="modal fade"
              id={`deleteFriend${id}`}
              tabIndex="1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              onMouseLeave={onMouseLeave}

          >
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                              Hủy kết bạn
                          </h5>
                          <button
                              type="button"
                              className="btn-close"
                              data-mdb-dismiss="modal"
                              aria-label="Close"
                          ></button>    
                      </div>
                      <div className="modal-body text-center">
                          <p> Bạn có muốn hủy kết bạn với người này không? </p>
                      </div>
                      <div className="modal-footer">
                          <button
                              type="button"
                              className="btn btn-light btn-lg"
                              data-mdb-dismiss="modal"
                          >
                              Hủy
                          </button>
                          <button
                              type="button"
                              className={`btn btn-danger btn-lg `}
                              data-mdb-dismiss="modal"
                              onClick={deleteFriend}
                          >
                              xác nhận
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </>
     )
}

export default DeleteFriend
