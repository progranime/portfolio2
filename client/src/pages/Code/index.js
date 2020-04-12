import React, { useState } from 'react'

import { Card, Spinner } from '../../components/UI'

const initialState = {
  codes: [
    {
      id: 1,
      thumbnail: `${process.env.PUBLIC_URL}/images/code/slider.jpg`,
      title: 'Card and Banner Slider',
      description: 'A card and banner slider using jquery'
    },
    {
      id: 6,
      thumbnail: `${process.env.PUBLIC_URL}/images/code/banner.jpg`,
      title: 'Banner',
      description: 'Banner with breadcrumbs and list of links'
    },
    {
      id: 2,
      thumbnail: `${process.env.PUBLIC_URL}/images/code/custom-list.jpg`,
      title: 'Custom List',
      description:
        'Custom list with many modifier to change the style of it, following the BEM naming conventio'
    },
    {
      id: 3,
      thumbnail: `${process.env.PUBLIC_URL}/images/code/dropdown.jpg`,
      title: 'Dropdown',
      description: 'Custom dropdown using Jquery and CSS3'
    },
    {
      id: 4,
      thumbnail: `${process.env.PUBLIC_URL}/images/code/tab.jpg`,
      title: 'Custom Tab',
      description: 'Custom tab using Jquery and CSS3'
    },
    {
      id: 5,
      thumbnail: `${process.env.PUBLIC_URL}/images/code/custom-radio-checkbox.jpg`,
      title: 'Custom Radio and Checkbox',
      description: 'Custom Radio and Checkbox using pure CSS3'
    }
  ]
}

const Code = () => {
  const [values] = useState(initialState)

  const renderCodes = () => {
    const codes = values.codes.map(code => {
      return (
        <div className='col-12 col-sm-6 col-md-4 mb-2' key={code.id}>
          <Card className='card card--secondary'>
            <div
              className='card__image-holder'
              style={{
                backgroundImage: `url(${code.thumbnail})`
              }}
            />
            <div className='card__details'>
              <p className='title'>{code.title}</p>
              <p className='description'>{code.description}</p>
            </div>
          </Card>
        </div>
      )
    })

    return <div className='row'>{codes}</div>
  }

  return (
    <div className='main-container main-container--adjustment'>
      <h2 className='text-center my-4'>
        MY <span className='text-primary'>CODE</span>
      </h2>

      {values.codes ? renderCodes() : <Spinner />}
    </div>
  )
}

export default Code
