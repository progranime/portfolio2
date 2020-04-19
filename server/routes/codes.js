const express = require('express')

const router = express.Router()

const DUMMY_DATA = [
  {
    id: 1,
    thumbnail: `/images/code/slider.jpg`,
    title: 'Card and Banner Slider',
    description: 'A card and banner slider using jquery',
    link: 'https://jsfiddle.net/progranime/xd86Lt7o/'
  },
  {
    id: 6,
    thumbnail: `/images/code/banner.jpg`,
    title: 'Banner',
    description: 'Banner with breadcrumbs and list of links',
    link: 'https://jsfiddle.net/progranime/617ce3uv/'
  },
  {
    id: 2,
    thumbnail: `/images/code/custom-list.jpg`,
    title: 'Custom List',
    description:
      'Custom list with many modifier to change the style of it, following the BEM naming conventio',
    link: 'https://jsfiddle.net/progranime/8L7yx5bj/'
  },
  {
    id: 3,
    thumbnail: `/images/code/dropdown.jpg`,
    title: 'Dropdown',
    description: 'Custom dropdown using Jquery and CSS3',
    link: 'https://jsfiddle.net/progranime/op5Lb20f/'
  },
  {
    id: 4,
    thumbnail: `/images/code/tab.jpg`,
    title: 'Custom Tab',
    description: 'Custom tab using Jquery and CSS3',
    link: 'https://jsfiddle.net/progranime/spjucwh0/'
  },
  {
    id: 5,
    thumbnail: `/images/code/custom-radio-checkbox.jpg`,
    title: 'Custom Radio and Checkbox',
    description: 'Custom Radio and Checkbox using pure CSS3',
    link: 'https://jsfiddle.net/progranime/uqyn4t8f/'
  }
]

// get all codes
router.get('/', (req, res, next) => {
  const codes = DUMMY_DATA

  res.json({
    codes
  })
})

module.exports = router
