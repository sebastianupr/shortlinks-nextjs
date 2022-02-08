const STORAGE_LINK_KEY = 'links'

export const getLinks = () => {
  const storageItem = localStorage.getItem(STORAGE_LINK_KEY)

  if (!storageItem) {
    setLinks([])
    return []
  }

  return JSON.parse(storageItem)
}

export const setLinks = (links) => {
  localStorage.setItem(STORAGE_LINK_KEY, JSON.stringify(links))
}

export const persistLink = (newLink) => {
  const links = getLinks()
    .filter((link) => link.code !== newLink.code)
    .concat([newLink])

  setLinks(links)
}

export const cleanLinks = () => {
  localStorage.removeItem(STORAGE_LINK_KEY)
}
