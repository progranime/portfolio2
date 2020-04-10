import React from 'react'

const FormLabel = props => {
  return (
    <label htmlFor={props.htmlFor} className={props.className}>
      {props.children}
    </label>
  )
}

FormLabel.defaultProps = {
  htmlFor: '',
  className: 'form-label'
}

export default FormLabel
