import { useState, useEffect } from 'react'
import _ from 'lodash'

const defaultState = {
  pageYOffset: 0,
  isBeyond: false,
  debounce: 300
}

export const useScroll = initialState => {
  const [values, setValues] = useState({
    ...defaultState,
    ...initialState
  })

  useEffect(() => {
    window.addEventListener(
      'scroll',
      _.debounce(() => {
        if (window.pageYOffset > values.scrollYLimit) {
          setValues({
            ...values,
            isBeyond: true
          })
        } else {
          setValues({
            ...values,
            isBeyond: false
          })
        }
      }, values.debounce)
    )

    return () => {
      window.removeEventListener('scroll')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return {
    values,
    scrollTop
  }
}
