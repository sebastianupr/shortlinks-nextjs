import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.css'

export default function ListButton ({
  children,
  className,
  theme = 'light',
  type = 'button',
  ...props
}) {
  return (
    <button
      className={classNames(
        styles.listButton,
        theme === 'light' ? styles.buttonLight : styles.buttonDark,
        className
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

ListButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
}
