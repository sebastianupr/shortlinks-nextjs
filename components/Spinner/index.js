import PropTypes from 'prop-types'

import styles from './styles.module.css'

export default function Spinner ({ show = false }) {
  if (!show) return null

  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}>
        <div className={styles.doubleBounce1}></div>
        <div className={styles.doubleBounce2}></div>
      </div>
    </div>
  )
}

Spinner.propTypes = {
  show: PropTypes.bool.isRequired
}
