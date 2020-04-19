import React from 'react'

import './index.scss'

const FloatingAction = props => {
  return (
    <div className={`${props.className}`} onClick={props.onClick}>
      <div className='floating-action__container'>{props.children}</div>
    </div>
  )
}

FloatingAction.defaultProps = {
  className: 'floating-action'
}

export default FloatingAction
