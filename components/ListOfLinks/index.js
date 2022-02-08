import { useEffect, useContext, useState } from 'react'
import style from './style.module.css'
import ButtonForm from 'components/ButtonForm'
import Context from 'Context/Context'

export default function ListOfLinks () {
  const [copied, setCopied] = useState('')

  const state = useContext(Context)
  const { shorterLinks = [], setShorterLinks } = state

  useEffect(() => {
    const localLinks = JSON.parse(localStorage.getItem('links'))
    if (localLinks) setShorterLinks(localLinks)
  }, [])

  const handleClick = shortLink => {
    if (shortLink) {
      const aux = document.createElement('input')
      aux.setAttribute('value', document.getElementById(shortLink).innerHTML)
      document.body.appendChild(aux)
      aux.select()
      document.execCommand('copy')
      document.body.removeChild(aux)
      setCopied(shortLink)
    }
  }

  const styleButton = style.button

  return (
    <div className={style.listOfLinks}>
      {shorterLinks.map(link => {
        return (
          <div key={link.code} className={style.link}>
            <div className={style.originalLink}>
              <h4>{link.original_link}</h4>
            </div>
            <div className={style.shortLink} >
              <h4
                id={link.short_link}
              >
                {link.short_link}
              </h4>
              {copied === link.short_link
                ? <ButtonForm
                  buttonlist="true"
                  background="dark"
                  customstyle={styleButton}
                >
                  Copied!
                </ButtonForm>
                : <ButtonForm
                  buttonlist="true"
                  onClick={() => handleClick(link.short_link)}
                  customstyle={styleButton}
                >
                  Copy
                </ButtonForm>
              }
            </div>
          </div>
        )
      })}
    </div>
  )
}
