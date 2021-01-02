import style from './style.module.css'

export default function ButtonForm (props) {
  const { children, buttonlist = false, background = 'light', customstyle } = props

  let styleButton = ''
  if (buttonlist) styleButton = style.buttonList
  else styleButton = style.button

  let custom
  if (customstyle) custom = customstyle
  else custom = ''

  return (
    <button
      className={`
      ${styleButton}
      ${background === 'light' ? style.buttonLight : style.buttonDark}
      ${custom}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
