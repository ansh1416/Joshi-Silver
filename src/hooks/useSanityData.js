import { useEffect, useState } from 'react'

import { client } from '../sanity/client'

const useSanityData = (query) => {
  const [data, setData] = useState([])

  useEffect(() => {
    client.fetch(query).then((res) => {
      setData(res)
    })
  }, [query])

  return data
}

export default useSanityData