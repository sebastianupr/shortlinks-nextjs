import { useState } from 'react'
import useSWR from 'swr'
import qs from 'qs'

import getShorterLink from 'services/getShorterLink'

const fetcher = async (_, query) => {
  const { url } = qs.parse(query)
  return getShorterLink(url)
}

export default function useAddShorterLink () {
  const [payload, setPayload] = useState({})

  const { data, isValidating, mutate } = useSWR(
    ['shorter-link', qs.stringify(payload, { encode: false })],
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnMount: false
    }
  )

  const handleMutate = (link) => {
    setPayload({ url: link })
    return mutate('shorter-link')
  }

  return {
    loading: isValidating,
    shorterLinkData: typeof data === 'object' ? data : null,
    mutate: handleMutate
  }
}
