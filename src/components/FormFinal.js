import React, { useState } from 'react'
// import { Form, Link } from 'react-router-dom'
import './FormFinal.css'
import Container from './Container'
import axios from 'axios'

const FormFinal = ({setSuccess, id, setMessage}) => {
    const [job_title, setJobTitle] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        const url='https://dev.octilus.in/api/update.php'
        axios.post(url, {job_title})
        .then(res => {
            res.data.success = true;
            res.data.message='Done'
            setMessage('Done')
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

  return (
    <>
        <Container />
        <div className='formFinalContainer'>            
            <div className='prev' onClick={e=>setSuccess(false)}>
                {/* <Link to='/'> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="back-arrow"><g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" opacity="0" transform="rotate(90 12 12)"></rect><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"></path></g></g></svg>
                    <p id='previous' style={{textDecorationStyle: 'none'}}>previous step</p>
                {/* </Link> */}
            </div>
            <h2>Select Job Position</h2>
            <div className='horiz'></div>
            <form onSubmit={handleSubmit}>
                <div className='jobs'>
                    <div className='jobitem'>
                        <input type="radio" name="job" id="frontend" required value={job_title} onClick={e=> setJobTitle(job_title)}/> 
                        <label htmlFor="frontend">Frontend Developer</label>
                    </div>
                    <div className='jobitem'>
                        <input type="radio" name="job" id="wordpress" value={job_title} onClick={e=> setJobTitle(job_title)}/> 
                        <label htmlFor="wordpress">WordPress Developer</label>
                    </div>
                    <div className='jobitem'>
                        <input type="radio" name="job" id="uiux" value={job_title} onClick={e=> setJobTitle(job_title)}/> 
                        <label htmlFor="uiux">UI/UX Designer</label>
                    </div>
                    <div className='jobitem'>
                        <input type="radio" name="job" id="support" value={job_title} onClick={e=> setJobTitle(job_title)}/> 
                        <label htmlFor="support">Support Engineer</label>
                    </div>
                    <div className='jobitem'>
                        <input type="radio" name="job" id="graphic" value={job_title} onClick={e=> setJobTitle(job_title)}/> 
                        <label htmlFor="graphic">Graphic Designer</label>                
                    </div>
                </div>
                <br/>
                <div>
                    <input type="checkbox" name="job" id="terms" required/> 
                    <label>I Accept the <span>Term of Conditions</span> and <span>Privacy policy</span></label>                
                </div>
                {/* <Link to='/application-submitted'> */}
                    <button type="submit">Submit</button>
                {/* </Link> */}
            </form>
        </div>
    </>
  )
}

export default FormFinal