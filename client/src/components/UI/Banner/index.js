import React from 'react'

import './index.scss'

const Banner = props => {
  return (
    <div className='banner'>
      <div className='banner__container'>
        <div
          className='banner__background'
          style={{
            backgroundImage: `url(http://jeremyespinosa.herokuapp.com/images/assets/workplace.jpg)`
          }}
        ></div>
        <div className='banner__content'>{props.children}</div>
      </div>
      <div className='banner__overlay'></div>
    </div>
  )
}

export default Banner
