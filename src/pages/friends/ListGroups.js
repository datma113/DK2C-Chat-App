
import React from 'react'
import { useSelector } from 'react-redux';
import Group from './Group';

const ListGroups = () => {
    // const groupsList =  useSelector((state) => state.groupsList);
    const groupsList = [1,2,3,4,5,6,7,8,9,0]
    const listGroupMap =
      groupsList.map((GroupObj,index) => {
        
        return <Group key={index} GroupObj={GroupObj}/>
      })
    return (
      <div className="row g-3">
        {listGroupMap}
      </div>
    )
}

export default ListGroups
