import React from 'react'
import { Link } from 'react-router-dom'
import './Submitted.css'

const Submitted = ({setMessage, setSuccess}) => {
  return (
    <div className='submitContainer'>
        <div className='check'> </div>
        <h1>Application Submitted</h1>
        <p id='thanks'>Thanks for your interest!</p>
        <p>Our review team will review your application and call you for interview</p>
        <Link to='/'>
          <button onClick={e=>{setMessage(false); setSuccess(false)}} style={{backgroundColor: '#0083ce'}}>Go back to Home</button> 
        </Link>
    </div>
  )
}

export default Submitted