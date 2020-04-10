import React from 'react'
import { Link } from 'react-router-dom'

import { Banner } from '../../components/UI/'

const Home = () => {
  return (
    <div>
      <Banner>
        <img src={`${process.env.PUBLIC_URL}/assets/home_picture.jpg`} alt='' />
        <div className='details'>
          <p className='title'>Jeremy Espinosa</p>
          <p className='description mb-2'>Front End Developer</p>
          <Link to='/about' className='btn btn-primary text-white'>
            Learn More
          </Link>
        </div>
      </Banner>
    </div>
  )
}

export default Home
