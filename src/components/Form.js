import './Form.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <>
        <div className='container'>
            <div className='innerText'>
                <h1>Let's Join with us !</h1>
                <p id='lorem'>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <footer>
                <div className='leftFoot'>
                    <p id='copyright'>Copyright © 2022 Octilus Technologies</p>
                </div>
                <div className='rightFoot'>
                    <div className='icons'>                    
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="facebook"><path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="twitter"><path d="M19.643 6.442A8.2 8.2 0 0 0 22 5.8a8.375 8.375 0 0 1-2.05 2.127c.009.176.013.352.013.53a11.594 11.594 0 0 1-11.674 11.67A11.614 11.614 0 0 1 2 18.283a8.329 8.329 0 0 0 .979.058 8.228 8.228 0 0 0 5.1-1.757 4.107 4.107 0 0 1-3.832-2.849 4.186 4.186 0 0 0 .773.072 4.1 4.1 0 0 0 1.08-.143 4.105 4.105 0 0 1-3.295-4.023v-.052a4.077 4.077 0 0 0 1.858.513 4.107 4.107 0 0 1-1.269-5.478 11.646 11.646 0 0 0 8.456 4.287 4.181 4.181 0 0 1-.105-.935 4.1 4.1 0 0 1 7.1-2.808 8.2 8.2 0 0 0 2.606-1 4.115 4.115 0 0 1-1.808 2.274Z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="linkedin"><path d="M6.975 20.667H3.117V9.059h3.858ZM5.072 3.462a2.011 2.011 0 1 0-.051 4.012h.026a2.012 2.012 0 1 0 .025-4.012Zm4.039 17.205h3.858v-6.482a2.639 2.639 0 0 1 .127-.941 2.111 2.111 0 0 1 1.98-1.411c1.4 0 1.955 1.064 1.955 2.625v6.209h3.858v-6.656c0-3.565-1.9-5.225-4.442-5.225A3.828 3.828 0 0 0 12.97 10.7V9.059H9.111c.051 1.089 0 11.609 0 11.609Z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="instagram"><path d="M12 6.865A5.135 5.135 0 1 0 17.135 12 5.135 5.135 0 0 0 12 6.865Zm0 8.469A3.334 3.334 0 1 1 15.334 12 3.334 3.334 0 0 1 12 15.334Zm6.539-8.672a1.2 1.2 0 1 1-1.2-1.2 1.2 1.2 0 0 1 1.2 1.2Zm2.937-1.212a4.917 4.917 0 0 0-1.154-1.772 4.894 4.894 0 0 0-1.77-1.153 7.318 7.318 0 0 0-2.428-.464C15.058 2.012 14.717 2 12 2s-3.057.011-4.124.061a7.326 7.326 0 0 0-2.427.464 4.9 4.9 0 0 0-1.77 1.153A4.882 4.882 0 0 0 2.525 5.45a7.332 7.332 0 0 0-.464 2.427C2.011 8.943 2 9.284 2 12s.011 3.057.061 4.123a7.332 7.332 0 0 0 .464 2.427 4.882 4.882 0 0 0 1.154 1.772 4.915 4.915 0 0 0 1.771 1.153 7.337 7.337 0 0 0 2.427.464C8.944 21.988 9.285 22 12 22s3.057-.011 4.123-.061a7.333 7.333 0 0 0 2.428-.464 5.113 5.113 0 0 0 2.925-2.925 7.306 7.306 0 0 0 .464-2.427c.049-1.067.06-1.407.06-4.123s-.011-3.057-.06-4.123a7.326 7.326 0 0 0-.464-2.427Zm-1.335 10.591A5.52 5.52 0 0 1 19.8 17.9a3.31 3.31 0 0 1-1.9 1.9 5.546 5.546 0 0 1-1.857.344c-1.054.048-1.371.058-4.042.058s-2.986-.01-4.04-.058A5.546 5.546 0 0 1 6.1 19.8a3.1 3.1 0 0 1-1.15-.748 3.092 3.092 0 0 1-.748-1.15 5.494 5.494 0 0 1-.344-1.857C3.812 14.987 3.8 14.671 3.8 12s.01-2.986.058-4.041A5.552 5.552 0 0 1 4.205 6.1a3.1 3.1 0 0 1 .748-1.15A3.072 3.072 0 0 1 6.1 4.2a5.494 5.494 0 0 1 1.86-.34C9.014 3.811 9.331 3.8 12 3.8s2.987.011 4.042.059A5.552 5.552 0 0 1 17.9 4.2a3.31 3.31 0 0 1 1.9 1.9 5.494 5.494 0 0 1 .344 1.857C20.19 9.014 20.2 9.33 20.2 12s-.01 2.986-.059 4.041Z"></path></svg>
                    </div>
                </div>
            </footer>
        </div>
        <div className='formContainer'>
            <h2>Personal Information</h2>
            <form> 
                <div className='details'>
                    <input type="text" placeholder='Name' name='name' required/>
                    <input type="email" placeholder='Email Address' name='email' required/>
                    <input type="tel" placeholder='Phone' pattern='[6-9][0-9]{9}' name='phone' required/>
                </div>
                <h5>Select gender</h5>
                <div className='gender'>
                    <div className='genderMale'>
                        <input type="radio" name="gender" id="male" value="male" required/> 
                        <label htmlFor="male">Male</label>
                    </div>
                    <div className='genderFemale'>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">Female</label>
                    </div>
                    </div>
                <Link to='/job-selection'>
                    <button type="submit">Next</button>
                </Link>
            </form>
        </div>
    </>
  )
}

export default Form

// export const formAction = async ({ request })=>{
//     console.log(request)
//     const data= await request.formData()
//     const submission = {
//         name: data.get('name'),
//         email: data.get('email'),
//         phone: data.get('phone'),
//         gender: data.get('gender')
//     }

//     console.log(submission)
// }