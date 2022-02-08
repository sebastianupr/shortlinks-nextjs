import { useState } from 'react'
import PropTypes from 'prop-types'
import Context from './Context'

export default function Provider ({ children }) {
  const { Provider } = Context
  const [shorterLinks, setShorterLinks] = useState([])

  const providerState = {
    shorterLinks,
    setShorterLinks
  }

  return <Provider value={providerState}>
    {children}
  </Provider>
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
}
