import React from 'react'
import Qualitie from './qualitie'
import Bookmark from './bookmark'

const User = (props) => {

  return (
      <tr>
        <td>{props.name}</td>
        <td>{props.qualities.map(qual => (
            <Qualitie
            key={qual._id}
            {...qual}
            />
        ))}</td>
        <td key={props.profession._id}>{props.profession.name}</td>
        <td>{props.completedMeetings}</td>
        <td>{props.rate}/5</td>
        <td>
           {<Bookmark
            status={props.bookmark}
            {...props}
            onChange={() => props.onBookmark(props._id)}      
           />}
        </td>
        <td><button type="button" className='btn btn-danger btn-sm' 
        onClick={() => props.onDelete(props._id)}>delete</button></td>
      </tr>  
  )
}

export default User