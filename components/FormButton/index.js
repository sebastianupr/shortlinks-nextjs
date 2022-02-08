import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.css'

export default function FormButton ({
  children,
  theme = 'light',
  className,
  type = 'button',
  ...props
}) {
  return (
    <button
      className={classNames(
        styles.formButton,
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

FormButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
}
