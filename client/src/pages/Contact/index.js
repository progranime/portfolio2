import React from 'react'

import {
  Button,
  Card,
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea
} from '../../components/UI'
import { useForm } from '../../hooks/useForm'

const initialState = {
  fullName: '',
  email: '',
  message: ''
}

const Contact = () => {
  const { values, changeHandler } = useForm(initialState)

  const submitHandler = e => {
    e.preventDefault()
    console.log('submit: ', values)
  }

  return (
    <div className='main-container main-container--adjustment'>
      <h2 className='text-center my-4'>
        MY <span className='text-primary'>CONTACT</span>
      </h2>

      <Card>
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <FormLabel htmlFor='fullName'>Full Name</FormLabel>
            <FormInput
              id='fullName'
              name='fullName'
              onChange={changeHandler}
              value={values.fullName}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <FormInput
              type='email'
              id='email'
              name='email'
              onChange={changeHandler}
              value={values.email}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor='message'>Message</FormLabel>
            <FormTextarea
              id='message'
              name='message'
              onChange={changeHandler}
              value={values.message}
            />
          </FormGroup>

          <div className='text-right'>
            <Button type='submit' className='btn btn-primary'>
              Send Message
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  )
}

export default Contact
