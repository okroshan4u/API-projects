import React from 'react'

const UserCard = (props) => {
    console.log(props.data)
  return (
    <div className='user-card'>
      <h3>{props.data.name.title} {props.data.name.first} {props.data.name.last}</h3>
      <img src={props.data.picture.medium} alt="" />
      <p>Phone: {props.data.phone}</p>

    </div>
  )
}

export default UserCard;
