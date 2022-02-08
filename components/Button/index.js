import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.css'

export default function Button ({
  children,
  size = 'big',
  type = 'button',
  className,
  ...props
}) {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={classNames(
          styles.button,
          size === 'big' ? styles.buttonBig : styles.buttonSmall,
          className
        )}
        type={type}
        {...props}
      >
        {children}
      </button>
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['big', 'small']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string
}
