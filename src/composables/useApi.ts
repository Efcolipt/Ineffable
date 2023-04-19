type FetchPath =
  | string
  | Request
  | Ref<string | Request>
  | (() => string)
  | Request
type FetchOptions = any

export const useApi = () => {
  const config = useRuntimeConfig()
  const configInfo = config.INFO_BD
  const configVideo = config.VIDEO_BD

  const fetchInfoCollectionApi = async <T>(
    path: FetchPath,
    options: FetchOptions = {}
  ) => {
    return await useFetch<T>(path, {
      ...options,
      method: 'GET',
      headers: {
        [configInfo.API_PROP]: configInfo.API_KEY,
        'Content-Type': 'application/json',
      },
    })
  }

  const fetchVideoCollectionApi = async <T>(
    path: FetchPath,
    options: FetchOptions = {}
  ) => {
    return await useFetch<T>(path, {
      ...options,
      method: 'GET',
      headers: {
        [configVideo.API_PROP]: configVideo.API_KEY,
        'Content-Type': 'application/json',
      },
    })
  }

  return {
    fetchInfoCollectionApi,
    fetchVideoCollectionApi,
  }
}
