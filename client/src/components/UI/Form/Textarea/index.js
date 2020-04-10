import React from 'react'

const FormTextarea = props => {
  return (
    <textarea
      className={props.className}
      name={props.name}
      id={props.id}
      rows={props.rows}
      onBlur={props.onBlur}
      onChange={props.onChange}
      value={props.value}
    />
  )
}

FormTextarea.defaultProps = {
  className: 'form-control',
  rows: 10
}

export default FormTextarea
