import React from 'react'
import { useSelector } from 'react-redux';
import Friend from './Friend'

const ListFriends = () => {
   const friendsList =  useSelector((state) => state.friendsList);
  
  const listFriendMap =
    friendsList.map((friendObj,index) => {
      return <Friend key={index} friendObj={friendObj}/>
      
    })
  return (
    <div>
      
      {listFriendMap}
      {friendsList.length<8 ? <div style={{height:"500px"}}></div>: null}
      
    </div>
  )
}

export default ListFriends
