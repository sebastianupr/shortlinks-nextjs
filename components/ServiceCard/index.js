import style from './style.module.css'

export default function ServicesCard ({ icon = '', title = '', description = '' }) {
  return (
    <div className={style.card}>
      <div className={style.cardIcon}>
        <img src={icon} alt={title}/>
      </div>
      <div className={style.cardText}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
