import React from 'react'
import { Link } from 'react-router-dom'

import { Banner } from '../../components/UI/'

const NotFound = () => {
  return (
    <div>
      <Banner backgroundImage={`${process.env.PUBLIC_URL}/assets/404.jpg`}>
        <div className='details'>
          <h1 className='text-white'>404 Page Not Found</h1>
          <p className='description mb-2'>
            The page you are looking for was moved, removed, renamed or might
            never existed!
          </p>
          <Link to='/' className='btn btn-primary text-white'>
            GO HOME
          </Link>
        </div>
      </Banner>
    </div>
  )
}

export default NotFound
