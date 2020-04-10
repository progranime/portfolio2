import React from 'react'

import './index.scss'

const Banner = props => {
  return (
    <div className='banner'>
      <div className='banner__container'>
        <div
          className='banner__background'
          style={{
            backgroundImage: `url(${props.backgroundImage})`
          }}
        ></div>
        <div className='banner__content'>{props.children}</div>
      </div>
      <div className='banner__overlay'></div>
    </div>
  )
}

Banner.defaultProps = {
  backgroundImage: `${process.env.PUBLIC_URL}/assets/planning.jpg`
}

export default Banner
