import { useState, useContext } from 'react'
import style from './style.module.css'
import ButtonForm from 'components/ButtonForm'
import getShorterLink from 'services/getShorterLink'
import Context from 'Context/Context'

export default function ShorterLinks () {
  const state = useContext(Context)
  const { shorterLinks, setShorterLinks } = state

  const [error, setError] = useState(false)
  const [link, setLink] = useState('')
  const handleChange = evt => {
    setError(false)
    setLink(evt.target.value)
  }

  const cleanForm = () => setLink('')

  const setLinks = (link) => {
    const links = [...shorterLinks, link]
    const linksJson = JSON.stringify(links)
    localStorage.setItem('links', linksJson)
    setShorterLinks(links)
    cleanForm()
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    const errorMessage = 'There was an error, verify that the link is correct'

    if (link.length > 4) {
      const data = await getShorterLink(link)
      if (data) setLinks(data)
      else alert(errorMessage)
    } else {
      setError(true)
    }
  }

  const styleButton = style.button

  return (
    <>
      <div className={style.shorterLinksForm}>
        <form onSubmit={handleSubmit} className={style.gridForm}>
          <div className={` ${style.input} ${error ? style.error : ''}`}>
            <label>
              <input
                type="text"
                placeholder="Shorten a link here..."
                value={link}
                onChange={handleChange}
              />
            </label>
            {error && <p>Please add a link</p>}
          </div>
          <div className={style.buttonMobile}>
            <ButtonForm>Shorten It!</ButtonForm>
          </div>
          <div className={style.buttonDesktop}>
            <ButtonForm customstyle={styleButton}>Shorten It!</ButtonForm>
          </div>
        </form>
      </div>
    </>
  )
}
