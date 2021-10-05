
import React from 'react'
import Group from './Group';

const ListGroups = (props) => {
   const groupsList= props.groupsList
    const listGroupMap =
      groupsList.map((GroupObj,index) => {
        
        return <Group key={index} groupObj={GroupObj}/>
      })
    return (
      <div className="row g-3">
        {listGroupMap}
      </div>
    )
}

export default ListGroups
