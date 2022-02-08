const swrConfig = {
  refreshInterval: 0,
  fetcher: (resource, init) => fetch(resource, init).then((res) => res.json())
}

export default swrConfig
