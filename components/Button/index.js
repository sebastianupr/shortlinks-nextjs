import style from './style.module.css'

export default function Button ({ children, size = 'big' }) {
  return (
    <div className={style.button}>
      <button className={ size === 'big' ? style.buttonBig : style.buttonSmall}>
        {children}
      </button>
    </div>
  )
}
