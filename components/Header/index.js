import { useState, useEffect } from 'react'
import Logo from 'components/icons/Logo'
import styles from './style.module.css'
import MobileMenu from 'components/MobileMenu/index'
import Button from 'components/Button'
import { useRouter } from 'next/router'

export default function Header () {
  const router = useRouter()
  const [menu, setMenu] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  const handleClick = () => {
    setMenu(!menu)
  }

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)')

    desktop.addEventListener('change', () => {
      setIsDesktop(desktop.matches)
    })

    setIsDesktop(desktop.matches)
  }, [])

  const goHome = () => router.push('/')

  return (
    <header>
      <nav className={styles.navigation}>
        <div className={styles.sectionMenu}>
          <div className={`${styles.menu} ${styles.left}`}>
            <Logo className={`${styles.logo} pointer`} onClick={() => goHome()}/>
            {isDesktop && <>
              <a href="#" className={styles.menuItem}>Features</a>
              <a href="#" className={styles.menuItem}>Pricing</a>
              <a href="#" className={styles.menuItem}>Resources</a>
            </>}
          </div>
        </div>
        <div>
          <div className={styles.menu} >
            {!isDesktop
              ? <>
                <i className="fas fa-bars icon-menu" onClick={handleClick}></i>
              </>
              : <div>
                <a href="#" className={styles.menuItem}>Login</a>
                <Button size='small'>Sign Up</Button>
              </div>
            }
          </div>
        </div>
      </nav>
      {menu && <MobileMenu />}
    </header>
  )
}
