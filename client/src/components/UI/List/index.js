import React from 'react'

import './index.scss'

const List = props => {
  return <ul className={props.className}>{props.children}</ul>
}

List.defaultProps = {
  className: 'list'
}

export default List
