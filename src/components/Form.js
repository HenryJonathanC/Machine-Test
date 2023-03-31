import axios from 'axios'
import './Form.css'
import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import Container from './Container'

const Form = ({setSuccess, setId}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState()
    const [gender, setGender] = useState('')

    useEffect(()=>{
        
    },[])

    const handleSubmit = e => {
        e.preventDefault()
        const url='https://dev.octilus.in/api/create.php'
        axios.post(url, {name, email, phone, gender})
        .then(res => {
            console.log(res.data)
            if(res.data.success){
                setId(res.data.id)
                setSuccess(true)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

  return (
    <>
        <Container />
        <div className='formContainer'>
            <h2>Personal Information</h2>
            <form onSubmit={handleSubmit}> 
                <div className='details'>
                    <input type="text" value={name} placeholder='Name' name='name' required onChange={e=>setName(e.target.value)}/>
                    <input type="email" value={email} placeholder='Email Address' name='email' required onChange={e=>setEmail(e.target.value)}/>
                    <input type="tel" value={phone} placeholder='Phone' pattern='[6-9][0-9]{9}' name='phone' required onChange={e=>setPhone(e.target.value)}/>
                </div>
                <h5>Select gender</h5>
                <div className='gender'>
                    <div className='genderMale'>
                        <input type="radio" value={gender} name="gender" id="male" required onClick={e=> setGender('Male')}/> 
                        <label htmlFor="male">Male</label>
                    </div>
                    <div className='genderFemale'>
                        <input type="radio" value={gender} name="gender" id="female" onClick={e=> setGender('Female')}/>
                        <label htmlFor="female">Female</label>
                    </div>
                    </div>
                {/* <Link to='/job-selection'> */}
                    <button type="submit">Next</button>
                {/* </Link> */}
            </form>
        </div>
    </>
  )
}

export default Form

