const API_URL = 'https://api.shrtco.de/v2'

export default async function getShorterLink (url) {
  try {
    const data = await fetch(`${API_URL}/shorten?url=g${url}`)
    const link = await data.json()
    return link.result
  } catch (err) {
    console.error(err)
    return err.response
  }
}
