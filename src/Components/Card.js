import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <>
    <div className='card'>
        <div className='card-details'>
            <div className='image'><img src={props.image} /></div>
            <div>First Name: {props.first_name}</div>
            <div>Last Name: {props.last_name}</div>
            <div>Job Title: {props.job_title}</div>
            <div>Email Id:{props.email}</div>
            <div>Phone: {props.phone}</div>
            <div>City: {props.city}</div>
        </div>
    </div>
    </>
  )
}

export default Card