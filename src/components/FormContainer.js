import React, { useState } from 'react'
// import Container from './Container'
import Form from './Form'
import FormFinal from './FormFinal'
import Submitted from './Submitted'

const FormContainer = () => {
    const [success, setSuccess] = useState(false)
    const [id, setId] = useState()
    const [message, setMessage] = useState('')

  return (
    <>
        { message ? <Submitted setSuccess={setSuccess} setMessage={setMessage}/> : success ? <FormFinal setMessage={setMessage} id={id} setSuccess={setSuccess}/>: <Form setId={setId} setSuccess={setSuccess}/>}
    </>

  )
}

export default FormContainer