import React from 'react'

import './index.scss'

const Badge = props => {
  return <span className={props.className}>{props.children}</span>
}

Badge.defaultProps = {
  className: 'badge'
}

export default Badge
