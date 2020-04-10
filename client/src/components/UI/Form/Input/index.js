import React from 'react'

const FormInput = props => {
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      className={props.className}
      onBlur={props.onBlur}
      onChange={props.onChange}
      value={props.value}
    />
  )
}

FormInput.defaultProps = {
  type: 'text',
  id: '',
  name: '',
  className: 'form-control'
}

export default FormInput
