import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Context from './Context'

import { getLinks } from 'services/storage/links'

export default function Provider ({ children }) {
  const { Provider } = Context
  const [shorterLinks, setShorterLinks] = useState([])

  const providerState = {
    shorterLinks,
    setShorterLinks
  }

  useEffect(() => {
    setShorterLinks(getLinks())
  }, [])

  return <Provider value={providerState}>{children}</Provider>
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
}
