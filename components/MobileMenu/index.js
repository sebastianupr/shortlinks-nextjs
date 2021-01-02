import style from './style.module.css'
import Button from 'components/Button'

export default function MobileMenu () {
  return (
    <div className={style.mobileMenu}>
      <div className={style.menuSection}>
        <a href="#">Features</a>
      </div>
      <div className={style.menuSection}>
        <a href="#">Pricing</a>
      </div>
      <div className={style.menuSection}>
        <a href="#">Resources</a>
      </div>
      <div className={style.bar}/>
      <div className={style.menuSection}>
        <a href="#">Login</a>
      </div>
      <div className={style.menuSection}>
        <Button>Sign Up</Button>
      </div>
    </div>
  )
}
