import { persistLink } from 'services/storage/links'

const API_URL = 'https://api.shrtco.de/v2'

export default async function getShorterLink (url) {
  const data = await fetch(`${API_URL}/shorten?url=${url}`)
  const link = await data.json()
  const { result } = link
  persistLink(result)
  return result
}
