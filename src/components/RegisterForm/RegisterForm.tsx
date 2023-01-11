import React, { Dispatch, SetStateAction, useState } from 'react'
import Button from '../ReusableComponents/Button'
import { TextInput } from '../ReusableComponents/TextInput'
import './registerForm.scss'

export default function RegisterForm({
  inputValues,
  setInputValues,
  handleSubmit,
}: Props) {
  const handleChange = (event: any) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className="register_form_root">
      <form className="register_form" onSubmit={handleSubmit}>
        {/* name input */}
        <TextInput
          onChange={handleChange}
          name="name"
          required
          label="Your name"
          placeholder="Enter your name"
        />
        {/* email input */}
        <TextInput
          onChange={handleChange}
          name="email"
          required
          label="Email"
          placeholder="Your email address"
        />
        {/* phone number input */}
        <TextInput
          onChange={handleChange}
          name="phone_number"
          label="Phone number"
          placeholder="Your phone number (optional)"
        />

        {/* Submit button */}
        <Button
          className="form_submit_button"
          text="Start chatting"
          type="submit"
        />
      </form>
    </div>
  )
}

// component props
interface Props {
  inputValues: {}
  setInputValues: Dispatch<SetStateAction<{}>>
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}
