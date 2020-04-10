import React from 'react'

import './index.scss'

const Button = props => {
  return (
    <button type={props.type} className={props.className} id={props.id}>
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  className: '',
  id: ''
}

export default Button
